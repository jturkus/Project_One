/**
 ****************************************************************
 *
 * This class constructs user utility menu on the
 * right hand side of the user stream. 
 *
 * Utilizes jQuery.tmpl potentially?
 * @version 1.0 - 2011/09/25 - initial deployment
 * 
 ****************************************************************
 */
(function($) {
	
	// used to dispose menu
	var freeze_dieOut = false;
	

	var plugin = Echo.createPlugin({
		"name": "StreamInteractMenu",
		"applications": ["Stream"],
		"init": function(plugin, application) {
			plugin.addCss('.echo-stream-userUtil { float: right; }');
			plugin.extendTemplate("Item", plugin.userUtilTemplate, "insertBefore", "echo-item-authorName");
			plugin.extendRenderer("Item", "userUtil", plugin.renderers.Item.userUtilRenderer);
			plugin.extendRenderer("Item", "userUtil", plugin.renderers.Item.userUtilControl);
			
			
			// This is for prompting in activities
			$('body').append(
				
				
				'<div style="display:none">'
					+'<div id="echo2-post-reportuser-msg">'
						+'<form id="reportuser-form">'
							+'<fieldset>'
								+'<div class="header">Hi, <span class="rname"></span>. Please tell us why why you are reporting the following user.</div>'
								+'<div class="reported-user"><div class="avatar"><img src=""/></div><div class="uname"></div></div>'
								+'<div class="row message-wrapper"><span class="label">Description</span><br /><textarea name="message" class="report-message"></textarea></div>'
								+'<div class="error" style="display:none"></div>'
								+'<div class="button-wrapper">'
									+'<div>'
										+'<input type="hidden" class="uid" name="uid" value="blank">'
										+'<input type="hidden" class="conversationID" name="conversationID" value="blank">'
										+'<input type="button" class="submit" value="Report"/>'
										+'<input type="button" class="cancel" value="Cancel"/>'
									+'</div>'
								+'</div>'
							+'</fieldset>'
						+'</form>'
						+'<div id="reportuser-form-complete" style="display:none;">'
							+'<p>Hi <span class="rname"></span>,</p>'
							+'<p>'
								+'Thank you for your help in moderating the community. We take these reports very seriously and '
								+'it will be reviewed to see if the reported user have violated his or her user policies. '
								+'Please understand this may take few days to complete and it does not guarantee '
								+'if there will be any actions taken towards the reported user. '
							+'</p>'
							+'<p>'
								+'Please <a href="//www.amctv.com/contact-us">contact us</a> if you have further questions.'
							+'</p>'
							+'<p>Sincerely,<br/>AMC tv Team</p>'
						+'</div>'
					+'</div>'
				+'</div>'
				
				
				
				+ '<div style="display:none">'
					+ '<div id="echo2-post-reportspammer-msg">'
						+ '<div class="success">'
							+ '<p>Hi <span class="rname"></span>,</p>'
							+ '<p>Thank you for your help in moderating the community. Your spam report have been received.</p>'
							+ '<p>'
								+ 'We take these reports very seriously and '
								+ 'it will be reviewed to see if the reported user have violated his or her user policies. '
								+ 'Please understand this may take few days to complete and it does not guarantee '
								+ 'if there will be any actions taken towards the reported user. '
							+ '</p>'
							+ '<p>Please <a href="//www.amctv.com/contact-us">contact us</a> if you have further questions.</p>'
							+ '<p>Sincerely,<br/>AMC tv Team</p>'
						+ '</div>'
						+ '<div class="failure"><p>Sorry, unexpected error occured. Please try again shortly.</p></div>'
					+ '</div>'
				+ '</div>'
				+ '<a id="echo2-post-error-msg-invoker" href="#echo2-post-error-msg" style="display:none"></a>'
				+ '<a id="echo2-post-reportuser-invoker" href="#echo2-post-reportuser-msg" style="display:none"></a>'
				+ '<a id="echo2-post-reportspammer-invoker" href="#echo2-post-reportspammer-msg" style="display:none"></a>'
			);
			
			// add fancybox
			$("#echo2-post-reportspammer-invoker").fancybox({
				'hideOnOverlayClick' : false,
				'speedIn' : 0,
				'speedOut': 0,
				'overlayColor' : '#000'
			});

			// This is to prompt errors
			$("#echo2-post-error-msg-invoker").fancybox({
				'overlayOpacity' : 0,
				'hideOnOverlayClick' : true
			});
			
			
			// this is for prompting user reports
			$("#echo2-post-reportuser-invoker").fancybox({
				'hideOnOverlayClick' : false,
				'speedIn' : 0,
				'speedOut': 0,
				'overlayColor' : '#000'
			});

		}
	});
	// Add Renderers
	plugin.renderers = {"Item": {}};

	// Add Labels
	plugin.addLabels({
		"report": "Report <b>{name}</b>",
		"spam": "Submit <b>{name}</b> for spam"
	});
	
	// Create Template
	plugin.userUtilTemplate = '<div class="echo-item-userUtil"></div>';
	plugin.reportMenuTmpl = 
			'<div class="menu menu-1">'
				+ '<div class="meta">'
					+ '<div class="uid">{uid}</div>'
					+ '<div class="name">{name}</div>'
					+ '<div class="conversationID">{conversationID}</div>'
					+ '<div class="avatar">{avatar}</div>'
				+ '</div>'
				+ '<div class="dropdown" style="display:none">'
					+ '<a class="entry echo-report-user first-entry"  href="#echo2-post-error-msg">' + plugin.label('report') + '</a>'
					+ '<a class="entry echo-report-spam last-entry"  href="#echo2-post-error-msg">' + plugin.label('spam') + '</a>'
				+ "</div>"
			+ '</div>';
	
	
	
	
	
	// replace patterns to create user html
	plugin.renderers.Item.userUtilRenderer = function(element, dom) {
		if(this.user.data.id != this.data.actor.id && this.user.data.logged) {
			
			// setup menu HTML
			var menu = $(plugin.reportMenuTmpl.replace(/{name}/g, this.data.actor.title)
					.replace(/{uid}/g, this.data.actor.id) // this is user id in capture
					.replace(/{conversationID}/, this.data.target.conversationID)
					.replace(/{avatar}/g, this.data.actor.avatar));
					
			// add click menu event
			menu.click(function(){
				
				// add menu shown class
				var dropdown = $(this).find('.dropdown');
				freeze_dieOut = false;
				dropdown.show();

				$(this).addClass('menu-1-clicked');

				// initalizing
				if(!dropdown.hasClass('initialized')) {
					dropdown.css({ 'position' : 'relative', 'height' : 0, 'width' : 'auto', 'display':'block' });
					var w = dropdown.outerWidth();
					dropdown.css({ 'position' : 'absolute', 'height' : 'auto', 'width':w + 'px' });
					dropdown.addClass('initialized');
				}

				// Delay this freeze out action so conflict with body like click
				// can be avoided because order of listener excecution can be iffy. 
				setTimeout(function() {
					freeze_dieOut = true;
				}, 100);
				
			});
			
			
			// Handle Reporting of the spam
			menu.find('.echo-report-spam').click(function() {
				var uid = $(this).parents('.echo-item-userUtil').find('.meta .uid').text().trim();
				var conversationID = $(this).parents('.echo-item-userUtil').find('.meta .conversationID').text().trim();
				var holder = $("#echo2-post-reportspammer-msg");

				holder.addClass('progress-loader');
				holder.find(".success").hide();			
				holder.find(".failure").hide();
				$("#echo2-post-reportspammer-invoker").click();	

				// submit spam report
				$.getJSON(
					"http:\/\/www.amctv.com\/users\/social\/echo\/api\/report.user?callback=?", 
					{ 'uid' : uid, 'message' : 'spam', 'conversationID' : conversationID }, 
					function(json) {
						//	
						holder.removeClass('progress-loader');
						
						if(json.success == true) {
							holder.find(".success").fadeTo('fast',1.0);
						}
						else {
							holder.find(".failure").fadeTo('fast',1.0);
						}
						
						holder.find(".rname").html(myDisplayName);			
					}
				);
			});
			
			
			menu.find(".echo-report-user").click(function() {		
				
				var form = $("#reportuser-form");		
				form.find("textarea,input").each(function(i,v){
					$(this).removeAttr('disabled');
				});
				
				form.fadeTo(0,1);
				form.find(".rname").html(myDisplayName);
				form.find(".avatar img").attr('src', $(this).parents('.echo-item-userUtil').find('.meta .avatar').text().trim());
				form.find(".uname").html($(this).parents('.echo-item-userUtil').find('.meta .name').text().trim());
				form.find(".uid").val($(this).parents('.echo-item-userUtil').find('.meta .uid').text().trim());
				form.find(".conversationID").val($(this).parents('.echo-item-userUtil').find('.meta .conversationID').text().trim());
				form.find(".report-message").val("");
				form.show();

				$("#reportuser-form-complete").hide();
				$("#echo2-post-reportuser-invoker").click();
				form.find('.error').html("");	
				$("#reportuser-form-complete .rname").html(myDisplayName);

				// kill the menu bar
				userReportMenuDieOut();

				return false;
			});
			
			
			return menu;
		}
		else {
			return '';
		}
	};

	
	
	/*
	 * Helper function to close the use menu.
	 */
	function userReportMenuDieOut() {
		if(freeze_dieOut) {
			$('.echo-item-userUtil .dropdown').hide();
			$('.echo-item-userUtil .menu-1').removeClass('menu-1-clicked');
		}
	}
	
	$('body').live('click', function(){
		userReportMenuDieOut();
	});

	$('.echo-item-container').mouseleave(function(){
		userReportMenuDieOut();
	});

	
	

	
	/**
	 * Post Report to 
	 */
	$("#reportuser-form .submit").live('click',function(){
		
		var form = $("#reportuser-form");
		var params = form.serialize();
				
		// disable form
		$("#reportuser-form").find("textarea,input").each(function(i,v){
			$(this).attr('disabled','disabled');
		});
		form.fadeTo(0, 0.3);

		$("#echo2-post-reportuser-msg").append($('<div class="progress-loader"/>').css({
			"position": "absolute", 
			'top':'0','left':'0', 
			"width": $("#echo2-post-reportuser-msg").outerWidth() + "px", 
			"height": $("#echo2-post-reportuser-msg").outerHeight() + "px"
		}));

		// now, submit
		$.getJSON(
			"http:\/\/www.amctv.com\/users\/social\/echo\/api\/report.user?callback=?", 
			params,
			function(json) {
				if(json.success == true) {
					form.hide();
					$("#reportuser-form-complete").show();
				}
				else {
					form.find(".error").html(json.msg);
					form.find(".error").show();
					form.fadeTo(0, 1);			
				}			
				$("#echo2-post-reportuser-msg .progress-loader").remove();
				form.find("textarea,input").each(function(i,v){
					$(this).removeAttr('disabled');
				});			
			}
		);
		
		return false;
	});
	
	
	$("#reportuser-form .cancel").live('click',function(){
		$.fancybox.close();
		return false;
	});



})(jQuery);
