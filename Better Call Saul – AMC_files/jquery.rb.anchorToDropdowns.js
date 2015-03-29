/**
 * Rainbow Mega Dropdowns
 * Version 1.0
 * A custom jQuery plugin handling the mega-dropdowns in the header
 */
;(function($) {
	/**
	 * Anchor elements to link anchor parents
	 */
	$.fn.anchorToDropdowns = function(options) {
		var $dropdowns, collection, opts, defaults;
		
		defaults = {
			of: $('#header'),
			my: 'left top',
			at: 'left bottom',
			offset: null
		};
		opts = $.extend(defaults, options);
		$dropdowns = [];
		$collection = this;
		
		// Collect dropdowns and convert to jQuery collection
		$collection.each(function(i){
			$dropdowns[i] = $( $(this).attr('href') );
		});
		$dropdowns = $($dropdowns);
		
		$collection.each(function(){
			var $this = $(this);
			var $href = $( $this.attr('href') );
			var $parent = $this.parent();
			
			var dropdownShow = function() {
				$parent.addClass('open').prev().addClass('open-adj-prev');
				$href.css('z-index', 99).stopTime('dropdownhide').children().show();
			};
			var dropdownHide = function() {
				// Delay hide, allow for clearing
				$href.css('z-index', 98).oneTime(50, 'dropdownhide', function() {
					$parent.removeClass('open').prev().removeClass('open-adj-prev');
					$(this).children().hide();
				});
			};
			
			$href.position({
				of: opts.of,
				my: opts.my,
				at: opts.at,
				offset: opts.offset
			});

			$parent.add($href)
				.bind('mouseover', function() {
					dropdownShow();
				})
				.bind('mouseleave', function() {
					dropdownHide();
				});
		});
	};
})(jQuery);