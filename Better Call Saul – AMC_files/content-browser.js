;(function($) {
	
	var original_document_title = document.title;
	
	var content_browser_get_id_base = function(browser) {
		return $('#module_id_base', browser).val();
	};

	var get_post_id = function() {
		return $('div.cfct-build').attr('id').match(/cfct\-build\-([0-9]+)/)[1];
	};

	// gather query params
	var content_browser_get_browser_params = function(browser) {
		var _filter = $('form', browser).serialize();
		var _page = $('#.content-search-resultset:visible', browser).find('div.content-search-results').attr('data-page');

		return {
			'filter': _filter,
			'page': _page,
			'module_id': browser.attr('data-module-id'),
			'post_id': get_post_id()
		};
	};

	// loading helper
	var content_browser_set_loading = function(target) {
		target.css({'position': 'relative'})
			.append(
				$('<div class="loading" />')
					.append('<div class="loading-indicator"></div>')
			);
	};

	$.fn.content_browser = function() {
		// options, non-configurable
		var opts = {
			ajaxurl: 'index.php'
		};

		// when the hash changes, we need to see what we're working with
		$(window).hashchange(function(){
	
			params = '';
			
			if( document.location.hash && document.location.hash.match(/=\d*[A-Za-z0-9]/gi) )
				params = get_hash_params();
			
			if( typeof params != "undefinded" && params != '' ){
				
				filter = get_param_filters( params.filter );
				
				if( filter['module_id_base'].match(/rb-content-browser/gi) ){
				
					filter_query(params, $('.box-content-browser'), true);
	
					// populate the shows drop-down				
					show = $('.rb-content-browser').find('select[name="rb-content-browser-content-type"]').val( filter['rb-content-browser-content-type'] );
					
					// get the actual show name for use in the document.title
					show = show.find('option').filter(':selected').text();
	
					// populate the content type drop-down
					content_type = $('.rb-content-browser').find('select[name="rb-content-browser-type"]').val( filter['rb-content-browser-type'] );
	
					// get the content type for use in the document.title
					content_type = content_type.find('option').filter(':selected').text();
					
					var page,show,content_type,omniture_page,omniture_title;
					
					if( is_numeric(params.page) ){
						page = "Page "+params.page;
						omniture_page = ":page-"+params.page;
					}
	
					sep = " - ";
	
					// let's build our new document title with the variables we have available
					var new_title = original_document_title;
	
					// let's build our omniture page at the same time
					var omniture_title = "";
	
					if( show ){
						new_title += sep + show;
						if(omniture_title)
							omniture_title += ":";
						omniture_title += slugify(show);
					}
	
					if( content_type ){
						new_title += sep + content_type;
						if(omniture_title)
							omniture_title += ":";
						omniture_title += slugify(content_type);
					}
	
					if( page ){
						new_title += sep + page;
					}
					
					omniture_title = $.trim(omniture_title);
	
					if( omniture_page )
						omniture_title += omniture_page;
					
					// magic title updater guy
					update_document_title(new_title);
					
					// make a call to Omniture
					callOmniture( omniture_title );
					
					// call Google Analytics pageview with current hash and title
					if(typeof _ca !== 'undefined' && _ca) {
						_ca.trackPageView({
							'name': omniture_title,
							'omniture_enabled': false,
							'url': document.location.href.split("#")[0] + "#" + omniture_title
						});
					}
				
				}
					
			}
			
		});

		var is_numeric = function(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}

		// set document title based on current state
		var update_document_title = function(new_title) {
			document.title = new_title;
		}

		// get current hash data
		var get_hash_params = function() {			
			return $.deparam.fragment(); // turn the hash into an object
		}

		// get current filters from hash data
		var get_param_filters = function(filter) {
			return $.deparam(filter); // turn the filter string into an object
		}

		// do filter query
		var filter_query = function(params, target, scroll) {
			content_browser_set_loading(target.find('.content-search-resultset'));

			$.get(
				opts.ajaxurl,
				{
					'content_browser_action': 'filter',
					'params': params,
					'module_id_base': content_browser_get_id_base(target)
				},
				function(r) {
					if (r.success) {
						target.find('.content-search-resultset').html(r.html);

						if (scroll && target.find('#browser_num_items').val() > 5) {
							var targetOffset = target.closest('.cfct-module').offset().top;
							$('html, body').animate({scrollTop: (parseInt(targetOffset, 10)-25)}, 1000);
						}
					}
					else {
						// handle error
					}
				},
				'json'
			);
		};

		// init
		return this.each(function() {
			// pagination click
			$('.box-content-browser .content-browser-navigation a').live('click', function() {
				var _this = $(this);
				var _browser = _this.closest('.box-content-browser');
				var params = content_browser_get_browser_params(_browser);

				if (_this.hasClass('content-browser-next')) {
					params.page++;
				}
				else if (_this.hasClass('content-browser-previous')) {
					params.page--;
				}

				$.History.go($.param(params));

				return false;
			});

			// form element change
			$('.box-content-browser form :input').live('change', function() {
				var _this = $(this);
				var _browser = _this.closest('.box-content-browser');
				var params = content_browser_get_browser_params(_browser);

				$.History.go($.param(params));
				return false;
			});
		});
	};

	// attach to browsers
	$(function() {
		var content_browser_module = $('.box-content-browser');
		var content_browser_module_exists = content_browser_module.length;
		if(!content_browser_module_exists) return;
		$('.box-content-browser').content_browser();
	});
})(jQuery);