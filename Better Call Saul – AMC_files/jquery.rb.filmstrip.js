/**
 * Custom Rainbow jQuery plugin that handles boilerplate jQuery Cycle
 * configuration for attachment page filmstrips.
 * Requires jquery.cycle.js
 */
;(function($) {
	$.fn.rbFilmstrip = function(options) {
		var $filmstrips, opts, defaults;
		defaults = {
			screensParent: 'div.screens',
			screens: 'div.screen'
		};
		opts = $.extend(defaults, options);
		
		$filmstrips = this;
		if ($filmstrips.length > 0) {
			$filmstrips.each(function(){
				var $this = $(this);
				var id = $this.attr('id');
				var $screensParent = $this.find(opts.screensParent);
				var $allScreens = $this.find(opts.screens);
				if ($allScreens.length > 1) {
					$this.addClass('filmstrip-on').append('<a id="prev-'+id+'" class="prev" href="#">Previous</a> <a id="next-'+id+'" class="next" href="#">Next</a>');
					$screensParent.cycle({
						speed: 170,
						timeout: 0, // used in conjunction with prev/next this turns of auto-advance
						fx: 'scrollHorz',
						next: '#next-'+id,
						prev: '#prev-'+id
					});

					// Cycle to active screen
					$allScreens.each(function(i) {
						if ($(this).hasClass('screen-current')) {
							$screensParent.cycle(i);
						};
					});
				};
			});
		};
	};
})(jQuery);