/*
 ************************************************************
 *
 * Echo Broadcast Listeners 
 * 
 * The event handling for the Submit Form Client should be
 * added here, if required.
 *
 *
 * @author Yoshitaka Ito
 *
 ************************************************************
 */
;(function($){
	
	

	/**
	 * On Submit on Render
	 */
	Echo.Broadcast.subscribe("Submit.onRender", function(topic, data, contextId) {

		// check if the submit client should be disabled.
		var user = new Echo.User({"appkey": "prod.amctv.com" });
	       user.init( function() {
		
				if(this.state == 'ModeratorBanned' && !(new EchoTools.Users().isQuarantined(user))) {

					$(".echo-submit-body").html('<div class="echo-banned-user">This account have been suspended for possible violation of our user policies. Please <a href="//www.amctv.com/contact/">contact us</a> if you think this has happened by accident.</div>');			
					$(".echo-submit-controls").html('');
					$('.echo-submit-socialShareContainer').remove();
			
				}
		});

	});
	

	/**
	 *	Handle events for onPostInit.
	 */
	Echo.Broadcast.subscribe("Submit.onPostInit", function(topic, data, contextId) {
		var analyticsTool = new EchoTools.Analytics();

		_ca.trackEvent($.extend(_ca._defaultValues, {
			'action': 'Echo.Submit.onPostInit',
			'label': analyticsTool.getSubmitPostType(data)
		}));
	});
	
	
	
	Echo.Broadcast.subscribe("Submit.onPostComplete", function(topic, data, contextId) {
		

		
		/*
		 * When the post is complete, check backplane ID exists or not. Then Check if the 
		 * comment was intercepted by filthfilter to determin to determine need to tag 
		 * these.
		 */
		var bp = new EchoTools.Backplane();
		if(bp.hasRequestorURL()) {


			new EchoTools.Query().lastEntryFlagged(
				data.postData.target, 
				bp.getRequestorURL(), 
				function(flagged, json) {

					var markerTool = new EchoTools.Markers();

					// check if this content has URL. If it does,
					// mask with "hasURL" marker.
					var content = data.postData.content;
					var exp = /(\b(http|https):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
					var urls = content.match(exp);
					if(urls!=null && urls.length>0) {
						markerTool.add( json.entries[0].object.id, [ 'hasURL' ], function(json) {});
						
											}

					
					// if this was not flagged check
					if(!flagged) {
					
						// used from response.
						var entry = json.entries[0];
						
						//
						// marking target of the comment as commented by given user, so you know which activity
						// user was active on.
						//
						markerTool.add( data.postData.target, ['comment:' + bp.getRequestorURL()]);
						markerTool.add_debug(
							entry.object.id, 
							['md5:' + md5(entry.object.id)], 
							"Submit.onPostComplete_" + (new Date().toUTCString()), 
							function(res){
								if(window.console)
									console.log('md5 on submit: ', entry.object.id, 'md5:' + md5(entry.object.id), res);
							}
						);

						//
						// facebook posting. This can have message link, picture, name, and description param.
						// Not positive about threshold of getting banned.
						//
						if($('.facebook-socialshare-switch').hasClass('on')) {
							// package data
							var params = JSON.stringify({ 
								"message" : data.postData.content.trim(),
								'link' : document.location.href
							});
							// call fb api endpoint
							$.getJSON($('.facebook-socialshare-switch').attr('href'), 
								{ "params" : params, "method" : "post" },
								function(res) {
									// if facebook post was succes, id would return
									if(res.success && res.data.id!=null) {
										set_socialshare_marker_on_entry('facebook',  bp.getRequestorURL(), entry);
										_ca.trackEvent($.extend(_ca._defaultValues, {
											'action': 'Echo.Submit.onPostComplete._SocialShare',
											'label': 'facebook',
											'share_url': data.postData.target
										}));
									}
									else {
										// handle this better
										if(window.console)
											console.log('Facebook Token has Expired or Invalid.: ', res.msg);
									}
								}
							);	
						}						
						
						//
						// For Twitter Posting.
						//
						if($('.twitter-socialshare-switch').hasClass('on')) {

							// package data
							var params = JSON.stringify({ 
								"status" : data.postData.content.trim(),
								'link' : document.location.href
							});
							// call twitter api endpoint
							$.getJSON($('.twitter-socialshare-switch').attr('href'), 
								{ "params" : params, "method" : "POST" },
								function(res) {
									
									// handle errors exists. Probably want to handle this little more elegantly.
									if(res.data.error) {
										$.getJSON(
											 "http:\/\/www.amctv.com\/users\/social\/twitter\/clearsession?callback=?",
											function(json) {
												if(json.success) 
													$('.echo-submit-twitterStatusUpdateContainer').appendTwitterSwitch();
												else {
													// if we are here, we have probably got a more serious issue than
													// simple error checking for comments.
												}
											}
										);
										$('<a/>').fancybox({
											'width' : '500px', 'height' : '300px',
											"content" : '<p class="social-share-prompt">We\'re sorry but posting to Twitter has failed.</p>'
										}).click();
									}									
									// handle success by tagging the post 
									else {
										set_socialshare_marker_on_entry('twitter',  bp.getRequestorURL(), entry);
										_ca.trackEvent($.extend(_ca._defaultValues, {
											'action': 'Echo.Submit.onPostComplete._SocialShare',
											'label': 'twitter',
											'share_url': data.postData.target
										}));
									}
								}
							);
						}
					}
					//
					// If this was flagged, prompt the user.
					//
					else {
						promptFlaggedPost(data);
					}
					
					var analyticsTool = new EchoTools.Analytics();
					_ca.trackEvent($.extend(_ca._defaultValues, {
						'action': 'Echo.Submit.onPostComplete',
						'label': 'twitter',
						'share_url':analyticsTool.getSubmitPostType(data)
					}));				
				
				}
			);
			

		}
		
	});


	/*
	 ************************************************************
	 *
	 * Helper Functions for Marking/Tagging
	 * echo elements.
	 *
	 ************************************************************
	 */


	/**
	 * Helper function to add social markeres
	 */
	function set_socialshare_marker_on_entry(sns, requestor_url, entry) {
		new EchoTools.Markers().add(
			entry.object.id,
			[
				'socialshare', // to indicate this was shared
				'socialshare:' + requestor_url, // to indicate autho has shared this on specific SNS
				'socialshare:' + sns, // too indicate this was shared to specific SNS
				'socialshare:' + sns + ':' + requestor_url // to indicate author shared this on SVNS
			]
		);
	}





	/*
	 ************************************************************
	 *
	 * Helper Functions for Fancybox Prompt, and DOM in general.
	 *
	 ************************************************************
	 */

	
	
	/**
	 * Prompts when Comment was Flagged by Sytem.
	 */
	function promptFlaggedPost(data) {
		// add fancybox invoker if it dones not yet exist
		if( $('.echo2-error-msg').length == 0)
			$('body').append('<a class="echo2-error-msg"></a>');

		var content = $(
			'<div id="echo2-post-error-msg">'
				+ '<div class="echo-error-msg">Sorry, your comment was flagged by the system and cannot be posted.</div>'
				+ '<div class="echo-error-user-comment">' + data.postData.content + '</div>'
			+ '</div>'
		);
		content.find('.echo-error-user-comment').html(data.postData.object);

		// if it does, launch fancybox.
		var msg = $('.echo2-error-msg').fancybox({
			'overlayOpacity' : 0,
			'hideOnOverlayClick' : true,
			'content' : content
		});
		msg.click();
	}
	
}) (jQuery);