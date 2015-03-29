/*
 ************************************************************
 *
 * Echo Plugin AMCNets_SocialShare Scripts. Facebook
 * and Twitter plugins listed below are required.
 *
 * Invocation of the post to twitter itself is handled
 * separately. This is because Echo's broadcase fires
 * multiple events, if called from multiple plugins, and
 * to avoid making multiple calls to respective APIs. This
 * maybe updated in turue.
 *
 * @author Yoshitaka Ito
 *
 ************************************************************
 */


// text for fb and twitter buttons
var facebookOnText = 'FB ON';
var facebookOffText = 'FB OFF';
var twitterOnText = 'Twitter ON';
var twitterOffText = 'Twitter OFF';

;(function($){

	var plugin = Echo.createPlugin({
		"name": "AMCNETS_SocialShare",
		"applications": ["Submit"],
		"init": function(plugin, application) {
			

			// twitter on-off text
			facebookOnText = plugin.config.get(application, "facebookOnText");
			facebookOffText = plugin.config.get(application, "facebookOffText");
			twitterOnText = plugin.config.get(application, "twitterOnText");
			twitterOffText = plugin.config.get(application, "twitterOffText");
			
			if(facebookOnText == null || facebookOnText.length == 0 )
				facebookOnText = 'FB On';
			if(facebookOffText == null || facebookOffText.length == 0 )
				facebookOffText = 'FB Off';
			if(twitterOnText == null || twitterOnText.length == 0 )
				twitterOnText = 'Twt On';
			if(twitterOffText == null || twitterOffText.length == 0 )
				twitterOffText = 'Twt Off';

			// give it a basic style that is not specific, and can be overridden easily.
			plugin.addCss(
				'.echo-submit-socialShareContainer { width:100%;overflow:hidden; padding: 2px 4px;  }'
				+ '.echo-submit-socialShareContainer .echo-submit-socialShareTextCounter { float:left; margin-bottom:2px; }'
				+ '.echo-submit-socialShareContainer .echo-submit-socialShareTextTooLong { color:#F00; }'
				+ '.echo-submit-socialShareContainer .echo-submit-socialSwitchContainer { overflow:hidden; float:right;  }'
				+ '.echo-submit-socialShareContainer .echo-submit-socialSwitchContainer span { padding-left:10px;  }'
				+ '.social-share-prompt { color:#000; padding:20px; }'
			);

			// for counter
			plugin.extendRenderer("Submit", "socialShareTextCounter", plugin.renderers.Submit.socialShareTextCounter);


			// for social buttons
			plugin.extendRenderer("Submit", "facebookStreamPublishContainer", plugin.renderers.Submit.facebookStreamPublishContainer);
			plugin.extendRenderer("Submit", "twitterStatusUpdateContainer", plugin.renderers.Submit.twitterStatusUpdateContainer);
			
			// for social playground
			plugin.extendRenderer("Submit", "socialSwitchPlayground", plugin.renderers.Submit.socialSwitchPlayground);
			
			plugin.extendTemplate("Submit", plugin.amcnets_socialShareTemplate, "insertBefore", "echo-submit-controls");



			
			// semi-aggressively check if twitter is enabled.
			setInterval(function(){
				application.rerender("socialShareTextCounter");
			},300);
			
		}
	});
	

	plugin.amcnets_socialShareTemplate = '<div class="echo-submit-socialShareContainer">'
											+ '<div class="echo-submit-socialShareTextCounter"></div>'
											+ '<div class="echo-submit-socialSwitchContainer">'
												+ '<span class="echo-submit-socialSwitchPlayground"></span>'
												+ '<span class="echo-submit-facebookStreamPublishContainer"></span>'
												+ '<span class="echo-submit-twitterStatusUpdateContainer"></span>'
											+ "</div>"
										+ '</div>'
										+ '<ul style="display:hide" class="echo-submit-socialShareErrors"></ul>';
	
	
	plugin.renderers = {"Submit": {}};
	plugin.is_submittable = null;

	plugin.listenEvents = function(application) {

	};

	

	
	
	
	plugin.renderers.Submit.socialShareTextCounter = function(element, dom) {
		var application = this;		
		var length = dom.get("text").val().length;
		var is_submittable = $('.twitter-socialshare-switch:first').hasClass('on') && dom.get("text").val().length>140 ;
		
		var span = $('<span>');
		if(is_submittable) {
			span.addClass('echo-submit-socialShareTextTooLong')
			span.text('+' + (length-140) + ' chars too many for Twitter');
			dom.get("content").addClass("echo-submit-mandatory");			

			// swap the post button to dummy one. if, echo in future supports
			// easier disabling of the submit button, swap this code out.
			var postContainer = dom.get("post-container");
			var btn = postContainer.find('.echo-button');
			if(postContainer.find("#btn-placeholder:first").length == 0) {
				var placeholder = btn.clone(false).show().attr('id','btn-placeholder').fadeTo(0, 0.6);
				postContainer.append(placeholder);
				btn.hide();
			}

		}
		else {
			span.text(length);
			dom.get("content").removeClass("echo-submit-mandatory");
			dom.get("post-container").show();

			// remove the dummyt button to disable post. if, echo in future supports
			// easier disabling of the submit button, swap this code out.
			var postContainer = dom.get("post-container");
			if(postContainer.find("#btn-placeholder").length != 0) {
				postContainer.find('.echo-button').show();
				postContainer.find("#btn-placeholder").remove();
			}
		}
		element.html(span);	

	}
	
	

	
	
	plugin.renderers.Submit.facebookStreamPublishContainer = function(element, dom) {
		var application = this;
		this.listenEvents();
		if (application.config.get("mode") == "compact" || !application.user.account.logged) {
			element.hide();
			return;
		}
		$(element).appendFacebookSwitch();
	}
	
	plugin.renderers.Submit.twitterStatusUpdateContainer = function(element, dom) {
		var application = this;
		if (application.config.get("mode") == "compact" || !application.user.account.logged) {
			element.hide();
			return;
		}
		$(element).appendTwitterSwitch();
	}
	
	
	plugin.renderers.Submit.socialSwitchPlayground = function(element, dom) {
		var application = this;
		var socialSwitchPlaygroundHTML = plugin.config.get(application, "socialSwitchPlaygroundHTML");
		element.text(socialSwitchPlaygroundHTML);
		plugin.listenEvents(application);
	}
	
	


	
	
}) (jQuery);







/*
 ************************************************************
 *
 * Below here if Facebook Connect Scripts.
 *
 ************************************************************
 */


/**
 * Required for Facebook Connect Callback
 */
function fb_connect_callback(success) {
	(function($){
		if(success) {
			// this can be toggling javascript too
			$('.echo-submit-facebookStreamPublishContainer').appendFacebookSwitch();
		}
	})(jQuery);
}
/**
 * jQuery plugin to simplify the adding fb connect button.
 */
(function($){	
	$.fn.appendFacebookSwitch = function() {

		var my = this;
		$.getJSON(
			"http:\/\/www.amctv.com\/users\/social\/facebook\/session?callback=?",
			function(res) {
				if(res.success) {
					if(res.data.session) {
						my.html('');
						
						var btn = $('<a class="facebook-socialshare-switch facebook-socialshare-btn"></a>')
						.attr('href', "http:\/\/www.amctv.com\/users\/social\/facebook\/action\/feed?callback=?")
						.addClass(res.data.publish_stream ? 'on' : '')
						.text((res.data.publish_stream ? facebookOnText : facebookOffText))
						.appendTo(my);
						
						btn.click(function() {
							if(!$(this).hasClass('disable')) {
								var prev_publish_stream = $(this).hasClass('on');
								var my = this;

								// toggle class
								$('.facebook-socialshare-switch').text((!prev_publish_stream ? facebookOnText : facebookOffText)).toggleClass('on').addClass('disable');

								$.getJSON(
									"http:\/\/www.amctv.com\/users\/social\/facebook\/publish_stream_status?callback=?",
									{ 'publish_stream' : prev_publish_stream ? 'FALSE' : 'TRUE' },
									function(res) {
										if(res.success) {
											$('.facebook-socialshare-switch').removeClass('disable');
										}
										else {
											// request failed. switch back to old view
											$('.facebook-socialshare-switch').text((prev_publish_stream ? facebookOnText : facebookOffText)).toggleClass('on').removeClass('disable');
										}
									}
								);

							}
							return false;
						});
						

					}
					else {

						
						function mayExtendToken(my, firstTry) {
							if(firstTry) {
								$('<iframe style="display:none" src="http://www.amctv.com/users/social/facebook/connect?top_js_callback=true&ts=' + new Date().getTime() + '"></iframe>').load(function(){
									mayExtendToken(my, false);
								}).appendTo('body');
								return;
							}
							else {
								var btn = $('<a class="facebook-connect-invoker facebook-socialshare-btn" href="#">' + facebookOffText + '</a>').appendTo(my);
								btn.click(function() {
									window.open(
										"http:\/\/www.amctv.com\/users\/social\/facebook\/connect", 
										'_blank', 
										'location=0,status=0,width=600,height=400');
									return false;
								})
							}
						}
						mayExtendToken(my, true);
						
					}
				}
				else {
					// do nothing if the session request completely fails
				}
			}
		);

	}
})(jQuery);






/*
 ************************************************************
 *
 * Below here is Twitter Share Scripts.
 *
 ************************************************************
 */



/**
 * Required for Twitter Connect Callback
 */
function twitter_connect_callback(success) {
	(function($){
		if(success) {
			$('.echo-submit-twitterStatusUpdateContainer').appendTwitterSwitch();
		}
	})(jQuery);
}

;(function($) {
	$.fn.appendTwitterSwitch = function() {

		var my = $(this);
		$.getJSON(
			"http:\/\/www.amctv.com\/users\/social\/twitter\/session?callback=?",
			function(res) {
				// check if request was success
				if(res.success) {
					// has session. should display button according to current on/off status.
					if(res.data.session) {
						
						try {
						
							var btn = $('<a class="twitter-socialshare-switch twitter-social-share-btn"></a>')
							.attr('href', "http:\/\/www.amctv.com\/users\/social\/twitter\/action\/statuses\/update")
							.addClass(res.data.post_to_twitter ? 'on' : '')
							.text((res.data.post_to_twitter ? twitterOnText : twitterOffText));

							$(my).find('.twitter-social-share-btn').remove();
							$(my).append(btn);			

							btn.click(function(){
								var my = this;
								if(!$(this).hasClass('disable')) {
								
									var prev_post_status = $(this).hasClass('on');
								
									// toggle class
									$(this).toggleClass('on').text((!prev_post_status ? twitterOnText : twitterOffText)).addClass('disable');

									$.getJSON(
										"http:\/\/www.amctv.com\/users\/social\/twitter\/post_to_status?callback=?",
										{ 'post_to' : !prev_post_status },
										function(res) {
											if(!res.success) {
												// request failed. switch back to old view
												$(my).toggleClass('on').text((res.data.post_to_twitter ? twitterOnText : twitterOffText));
											}
											$(my).removeClass('disable');
										}
									);
								}
								return false;
							});
							
						}
						catch(t) {
							if(window.console) {
								console.log('error occured attaching twitter switch');
								console.log(my);
								console.log(t);
							}
						}
							
					}
					// no session. create connect link.
					else {
						$(my).find('.twitter-social-share-btn').remove();
						var btn = $('<a href="#" class="twitter-connect-invoker twitter-social-share-btn">' + twitterOffText + '</a>').appendTo(my);
						btn.click(function(){
							window.open(
								"http:\/\/www.amctv.com\/users\/social\/twitter\/connect",
								'_blank',
								'location=0,status=0,width=800,height=600');
							return false;
						});
					}
				}
				else {
					// request failed somehow. Do nothing.
					if(window.console) {
						console.log('---unexpected twitter session failure---');
						console.log(res);
					}
				}
			}
		);

	}
})(jQuery);