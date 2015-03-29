/*
Fire code on DomReady Event...

Run in anon function closure to prevent conflicts.
Inside this function jQuery is passed in as the $ alias, making it safe to use $.
Outside the function, $ is not used, preventing conflicts from happening.
Invoking jQuery.noConflict() is not necessary.
*/

jQuery(function($) {
	// Init placeholders
	$.placeholders();
	
	// Init tabs. Targeting id should speed DOM crawl in IE.
	var $tabs = $('#page-tabs');
	$tabs.tabs()
		// Bind internal anchor links that match tab anchors to activate tab.
		.find('.tabs-nav a').each(function(){
			var href = $(this).attr('href');
			$tabs.find('a[href='+href+']').click(function(){
				$tabs.tabs('select', href);
				return false;
			});
		});
	$('section.tabs').tabs();

	var $anchors = $('body:not(.home) #nav-global a.anchorto');
	if ($anchors.length > 0) {
		$anchors.anchorToDropdowns({ offset: '0 -1' });
	} else {
		$anchors = $('body.home #nav-global a.anchorto');
		if ($anchors.length > 0) {
			$anchors.anchorToDropdowns({ offset: '0 -24' });
		};
	};

	$('#nav-subheader').nestedDropdowns();
	
	var $pickers = $('.picker .nav');
	if ($pickers.length > 0) {
		$pickers.nestedDropdowns({
			menu: 'div.menu'
		});
	};

	// Columnize season/episode dropdowns - JDG
	$('.picker-controls .menu ul').columnizeLists({
        rows: 18,
        cols: 2
    });

	// Filmstrips on attachment pages
	$('div.filmstrip').rbFilmstrip();

	// Vertically center Header subTout content
	var $headerToutContainer = $('.box-tout-main-sub .content-container');
	if ($headerToutContainer) {
		var toutHeight = $headerToutContainer.outerHeight();
		$headerToutContainer.css('margin-top', -toutHeight/2);
	};
});
/**
 * Nested Dropdowns
 * Used for subheader
 */
;(function($) {
	$.fn.nestedDropdowns = function(options) {
		var opts, defaults;
		defaults = {
			hoverClass: 'hover',
			menu: 'ul',
			item: 'li',
			hasMenuClass: 'has-menu'
		};
		opts = $.extend(defaults, options);

		var $li = this.find(opts.item);
		
		if ($li.length == 0) {
			return;
		};

		$li.has(opts.menu)
			.addClass(opts.hasMenuClass)
			// Add hover class for IE6 compat
			.hover(function(){
				$(this).addClass(opts.hoverClass);
			},
			function(){
				$(this).removeClass(opts.hoverClass);
			});
		
		this.find('> ' + opts.item + ' > a').addClass('lv1');
	};
})(jQuery);















/**
 * For Controlling the Newsletters. Have jQuery wrapped and it is safe to use $ notation.
 * 
 * It looks for class name specifying the show in the body tag, and if found, checks for the newsletters
 * specific to the show. If not found, it will default to a AMCNewsletter overlay.
 * 
 * This method is very inefficient for 2 reasons. First, the code must bridge between
 * blogs and www domain. This makes it that we are not bound to one set of rule as to
 * how these newsletter links have been generated.
 * 
 * Secondly, there is a severe issue with firefox with iframe. Unless we force reload the
 * URL of the domain at which user is voting, iframe loads blank far too often.
 * 
 */
(function($) {
	// load after all the DOM has loaded. Requires to be able to scan anchors.
	$(function() {

		// if newsletter interval launch exists, trigger event
		if($('#newsletter-overlay-trigger').length > 0) {
			var target_url = $('#newsletter-overlay-trigger').data('target');
			var target_cookiename = 'newsletter-interval-launch_' + target_url;
			if($.cookie(target_cookiename) != 'true') {
				try {
					
					var newsletterOverlayParams = {
						'content' : $('<iframe>')
									.attr('src', target_url)
									.attr('id', 'newsletter-subscription-modal-frame')
									.css({'width':'668px','height':'508px', 'overflow' : 'hidden'}),
						'scrolling' : 'no'
					};
	
					// giving it a slight time lag, so FF has chance to initialize
					setTimeout(function() {	
						$.amcn_launchOverlay(newsletterOverlayParams);
						$.cookie(target_cookiename, 'true', { expires: 28, path: '/', domain : 'amctv.com'});
					},100);
				}
				catch(t) {
					console_log(t);
				}
			}
		}
	});
})(jQuery);





/* Console Logging Helper */
function console_log(str) {
	if(window.console) console.log(str);
}

// simplifies starts with call
String.prototype.startsWith = function(str) {
	return (this.match("^"+str)==str);
}
// simplify slugification
String.prototype.slugify = function() {
	var text = this;
	text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
	text = text.replace(/-/gi, "_");
	text = text.replace(/\s/gi, "-");
	return text.toLowerCase();
}