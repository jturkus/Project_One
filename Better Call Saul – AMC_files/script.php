/*
 * 
 * Javascript classes associated w/ ajax actions.
 * Variables declared here should be available globally.
 * 
 */

document.domain = 'amctv.com';

var myLoggedIn = false;
var myAvatar = null;
var myDisplayName = null;
var myEchoID = null;
var mySessionVerified = false;
var mySessionInfo = null;

(function($) {
	$(function(){
		
		
		function UserAuth() {}
		UserAuth.createRedirectURL = function(url, encode) {

			// timestamp to be used
			var ts = new Date().getTime();

			// split out hash, if its appended
			var hashpos = url.indexOf("#");
			var base = hashpos > 0 ? url.substr(0,hashpos) : url;
			var hash = hashpos > 0 ? url.substr(hashpos) : '';
					
			// add url parameter to avoid hitting the current url
			var qmarkpos = base.indexOf('?');
			if(qmarkpos > 0) 
				base = base + "&t" + "__ts" + "=" + ts;
			else
				base = base + "?t" + "__ts" + "=" + ts;
	
			// now construct url
			var newURL = base + hash;

			
			// escape, if specified
			return !encode ? newURL : encodeURIComponent(newURL);
		}

		
		
		// store current url and parent frame urls
		var current_url = location.href;
		var parent_url = parent.document.location.href;	
		var redirect_url = parent_url.indexOf('e_type') > 0 ? parent_url.substr(0,parent_url.indexOf('e_type')) : parent_url;
		
		// override redirect url if necessarily
		if(gup(parent_url, 'redirect_url')) {
			redirect_url = gup(parent_url, 'redirect_url');
		}


		if(parent_url.startsWith('http://www.amctv.com/users/auth')) {
			parent_url = 'http://www.amctv.com';
		}
		

		// setup document.domain of the app, so iframes can access the header
		document.domain = 'amctv.com';

		$.getJSON('http://www.amctv.com/users/auth/session?jsoncallback=?',function(json){
			var bp_url_cookie_name = 'www_backplane_user_url';
			var username_cookie_name = 'www__jrdn';	
			mySessionInfo = json;
			
			
			
			// check if the user is ipbanned
			if(mySessionInfo.ipbanned) {
				$('.showOnLoggedIn').remove();
				$('.showOnLoggedOut').remove();
				$('.login-invoker').remove();
				$('.log-pane-invoker').remove();
				$('.logout-invoker').remove();
				$('.register-invoker').remove();
				return;
			}


			// Checks Session then setup appropriate invokers per page and also show elements based on it
			if(json.success == 'true' && json.hasSession == 'true') {

				// escape if somehow user is logged in but does not have profile url associated with it.
				if(!$.cookie(bp_url_cookie_name)) {
					document.location.href = "http://www.amctv.com/users/auth/logout?redirect=" + redirect_url + '&d='+new Date().getTime(); 
					return;
				}

				var profile_url = $.cookie(bp_url_cookie_name).replace(/http:.*?amctv.com/, "http://www.amctv.com") + escape($.cookie(username_cookie_name).replace('+', '-').replace(' ', '-').toLowerCase());
				
				$('.log-pane-invoker').each(function() {
					$(this).html('<a class="profile" href="' + profile_url + '">Profile </a> | <a class="logout-invoker" href="#">Log Out</a>');
					if($(this).attr('redirect_url')) {
						$(this).find('.logout-invoker').attr($(this).attr('redirect_url'));
					}
				});
				$('#nav-global-login').each(function() {
					$(this).html('<li><a class="first-child profile" href="' + profile_url + '">Profile </a></li><li><a class="logout-invoker" href="#">Log Out</a></li>');
					if($(this).attr('redirect_url')) {
						$(this).find('.logout-invoker').attr($(this).attr('redirect_url'));
					}
				});
				$('.showOnLoggedIn').show();
				$('.showOnLoggedOut').remove();
				
				// User Inofrmation
				myLoggedIn = true;
				myAvatar = json.avatar;
				myDisplayName = json.displayName;
				myEchoID = json.echo_uid;
				
				
				// add hidden logout-invoker
				$('<a/>').addClass('logout-invoker').hide().appendTo('body');
				
				
				// Update Profile URLs
				$('.profile-invoker').html('<a class="profile" href="' + profile_url + '">Profile</a>');


				/* This is a script for updating registration pattern. */
				// Launch the iframe if the user is logged in and have not entered MSO
				if(json.isInitialVisit) {
					var hidden_link = $('<a/>').appendTo('body').fancybox({
						'centerOnScroll' : true,
						'modal' : true,
						'type' : 'iframe',
						'width' : 700,
						'height' : 450,
						'href' : 'http://www.amctv.com/users/getting-started/uinfo.php'
					}).click();
				}
			
			}
			else {
				$('.log-pane-invoker').each(function() {
					$(this).html('<a class="login-invoker" href="#">Sign In</a> | <a class="register-invoker" href="#">Register</a>');
					if($(this).attr('redirect_url')) {
						$(this).find('.login-invoker, .register-invoker').attr('redirect_url', $(this).attr('redirect_url'));
					}
				});
				$('#nav-global-login').each(function() {
					$(this).html('<li><a class="first-child login-invoker" href="#">Sign In</a></li><li><a class="register-invoker" href="#">Register</a></li>');
					if($(this).attr('redirect_url')) {
						$(this).find('.login-invoker, .register-invoker').attr('redirect_url', $(this).attr('redirect_url'));
					}
				});				
				$('.showOnLoggedIn').remove();
				$('.showOnLoggedOut').show();
			};
			

			// verify sessions
			mySessionVerified = true;			

			// Invoke Login Link
			$('.login-invoker').each(function() {
				var my_redirect_url = $(this).attr('redirect_url') ? $(this).attr('redirect_url') : redirect_url;
				$(this).addClass('iframe');
				$(this).attr('href','http://www.amctv.com/users/auth/login?redirect=' + UserAuth.createRedirectURL(my_redirect_url, true));
				$(this).fancybox({ width : 780, height : 320, titleShow : false });	
			});

			// Update link action for Logging out
			$('.logout-invoker').each(function() {
				var my_redirect_url = $(this).attr('redirect_url') ? $(this).attr('redirect_url') : redirect_url;
				$(this).attr('logout_link', "http://www.amctv.com/users/auth/logout?redirect=" + UserAuth.createRedirectURL(my_redirect_url, true));
			});
			$('.logout-invoker').live('click',function(){ 
				document.location.href = $(this).attr('logout_link');
			});

			// Invoke Registration Link
			$('.register-invoker').each(function() {
				// scan in case anchor does not exist
				var e = this;
				if(!$(this).is('a')) {
					$(this).html('<a>Register</a>');
					e = $(this).find('a');
				}
				var my_redirect_url = $(e).attr('redirect_url') ? $(this).attr('redirect_url') : redirect_url;
				$(e).addClass('iframe');
				$(e).attr('href','http://www.amctv.com/users/auth/user.create?redirect=' + UserAuth.createRedirectURL(my_redirect_url, true));
				$(e).fancybox({ width : 780, height : 470, titleShow : false });
			});


			// NOTE. This is for registration process.
			if($(".login-autoload").size()>0) {
				$('.login-invoker').click();
			}
			else if(gup(parent_url, 'e_type')){
				$('.login-invoker').attr('href',
					'http://www.amctv.com/users/auth/login?redirect=' + UserAuth.createRedirectURL(parent_url, true)
					+ '&d=' + new Date().getTime()
					+ '&e_type=janrain'
					+ '&e_msg=' + escape(gup(parent_url, 'e_msg'))
				);
				$('.login-invoker').click();
			}

			
			
			
			// Let's automatically log out the users who are banned via Echo.
			// init user data
			var user = new Echo.User({"appkey": appKey });
	        user.init(function(){
				if(user.data.state == 'ModeratorBanned' && !(new EchoTools.Users().isQuarantined(user))) {
					$('.logout-invoker').click();
				}
			});
			
			

			var lastURL = location.href;
			setInterval(function(){

				if(lastURL != location.href) {
					try {
						var hashpos = location.href.indexOf("#");
						if(hashpos > 0) {
							var url = UserAuth.createRedirectURL(location.href, true);
							$('.login-invoker').attr('href','http://www.amctv.com/users/auth/login?redirect=' + url);
							$('.logout-invoker').attr('logout_link',"http://www.amctv.com/users/auth/logout?redirect=" + url);
							$('.register-invoker').attr('href', 'http://www.amctv.com/users/auth/user.create?redirect=' + url);
						}
						lastURL = location.href;
					}
					catch(t) {
						console.log(t);
					}
				}
			},500);
	

		});
		

	});
	
})(jQuery);












/*
 * Resizes Fancybox
 */
function resize_fancybox(w,h) {
	(function($) {
		$('#fancybox-inner').width(w-20);
		$('#fancybox-wrap').width(w);		
		$('#fancybox-inner').height(h-20);
		$('#fancybox-wrap').height(h);
	})(jQuery);
}

/**
 * Log User Out
 */
function kill_session(){
	(function($) {
		$('.logout-invoker').click();
	})(jQuery);
}


/**
 * Parse URL Params
 */
function gup( url, name ) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );var results = regex.exec( url );
	if( results == null )
		return "";
	else
		return decodeURIComponent(results[1]);
}



/*
 *
 * Below this is helper scripts
 * 
 */


/**
 * Extending String class to trim all the necessarily data.
 * @return trimmed string
 */
String.prototype.trim = function () { return this.replace(/^\s*/, "").replace(/\s*$/, ""); };
/**
 * Extending String class to have startsWith method
 * @return true if string starts with given pattern.
 */
String.prototype.startsWith = function(str){ return (this.match("^"+str)==str); };
/**
 * Extending String class to have endWithMethod.
 * @return true if string ends with given pattern.
 */
String.prototype.endsWith = function(str){ return (this.match(str+"$")==str); };
 /**
  * Extending String class.Matches wildcard within the String.
  * @return true if the string matches with wildcard pattern
  */
String.prototype.wildcardMatch = function (str) {
 	var str = str.replace(/\*/g, '(.*)');
 	return new RegExp(str).test(this);
};
String.prototype.toUppercaseFirstChar = function (str) {
	return str.substring(0,1) + str.toUppercase(1, str.length);
};