(function($){

	$(function(){
		$.each(_launchable_interstitials.iframes, function(i, v)	{
			$('a[href^="' + v.content + '"]').addClass('init').on('click', function(e){
				e.preventDefault();
				var params = {
					'width': v.w,
					'height': v.h,
					'autoScale': false,
					'autoDimensions': false,
					'scrolling': 'no'
				};
				params.content = $('<iframe></iframe>')
					.attr('src', v.content)
					.attr('id', 'newsletter-subscription-modal-frame')
					.css({
						'width': v.w + 'px',
						'height': v.h + 'px',
						'overflow': 'hidden'
					});
				$.amcn_launchOverlay(params);
			});
			
		});
	});

})(jQuery);