var env = location.href.indexOf("www") !== -1 ? 'www' : location.href.indexOf("stage") !== -1 ? 'stage' : 'dev';
var authenticatingWith = 'none';
window.authenticatedWith = 'NonAuth';
window.lastAuthenticatedWith = false;
window.currentlyAuthenticated = false;
var authResource;
var done = false;
var addOnce = false;
var stop = false;

var MVPDHomepageURLs = {
    'Comcast_SSO' : 'http://xfinitytv.comcast.net/',
    'Cablevision' : 'http://www.optimum.net/tvtogo'
};

var syncacoreRequestOptions = { "mvpdConfig":{ "asu_auth-gateway_net":{ "iFrameRequired":false }, "auth_armstrongmywire_com":{ "iFrameRequired":false }, "auth_atlanticbb_net":{ "iFrameRequired":false }, "auth_cableone_net":{ "iFrameRequired":false }, "auth_centurylink_net":{ "iFrameRequired":false }, "auth_hawaiiantel_net":{ "iFrameRequired":false }, "DTV":{ "iFrameRequired":false }, "auth_metrocast_net":{ "iFrameRequired":false }, "auth_surewest_net":{ "iFrameRequired":false }, "auth_truvista_net":{ "iFrameRequired":false }, "burlington_auth-gateway_net":{ "iFrameRequired":false }, "clickcabletv_auth-gateway_net":{ "iFrameRequired":false }, "consolidated_auth-gateway_net":{ "iFrameRequired":false }, "enventis_auth-gateway_net":{ "iFrameRequired":false }, "epb_auth-gateway_net":{ "iFrameRequired":false }, "gci_auth-gateway_net":{ "iFrameRequired":false }, "googlefiber_auth-gateway_net":{ "iFrameRequired":false }, "gta_auth-gateway_net":{ "iFrameRequired":false }, "gvtc_auth-gateway_net":{ "iFrameRequired":false }, "hargray_auth-gateway_net":{ "iFrameRequired":false }, "hometelecom_auth-gateway_net":{ "iFrameRequired":false }, "hometowncable_auth-gateway_net":{ "iFrameRequired":false }, "hotwirecommunications_auth-gateway_net":{ "iFrameRequired":false }, "knology_auth-gateway_net":{ "iFrameRequired":false }, "longlines_auth-gateway_net":{ "iFrameRequired":false }, "morrisbroadband_auth-gateway_net":{ "iFrameRequired":false }, "msauth_midco_net":{ "iFrameRequired":false }, "myrtu_auth-gateway_net":{ "iFrameRequired":false }, "nextech_auth-gateway_net":{ "iFrameRequired":false }, "nwcable_auth-gateway_net":{ "iFrameRequired":false }, "openband_auth-gateway_net":{ "iFrameRequired":false }, "serviceelectric_auth-gateway_net":{ "iFrameRequired":false }, "tds_auth-gateway_net":{ "iFrameRequired":false }, "telus_auth-gateway_net":{ "iFrameRequired":false }, "www_websso_mybrctv_com":{ "iFrameRequired":false } } };

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    iPhone: function(){
        return navigator.userAgent.match(/iPhone|iPod/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


jQuery(document).ready(function($) {

    // Log in validation
    $('#login-form-submit').on('click',function(event){
        event.preventDefault();
        if($('#provider-list').val().length > 0){
            ae.setSelectedProvider($('#provider-list').val());
        }else{
            $('div.chosen-container').css('border', '1px solid red');
        }
    });

    window.lastAuthenticatedWith = readCookie('amc-tve-authn');
    var params = getSearchParameters();
    if(params.testip || window.lastAuthenticatedWith == null) {
        getISP();
    }

    /* RESPONSIVE ELEMENTS */
    //change auth text for small screens
    if($(window).width() < 960){
         $('#login').html('...');
    }


    //collapse menus on screen resize (ipad orientation change)
    $(window).resize(function(){
        //removeMSOMenu();
    });

    //detect msos after load, close menu on click of MSO
    $('#provider-list').on('click', '.mvpd_option', function() {
        toggleMSOMenu();
    });

    //expand mobile responsive menu
       var cbpHorizontalMenu = (
        function () {

            var b = $("#cbp-hrmenu > ul > li"),
                g = b.children("a"),
                c = $("body"),
                d = -1,
                menu = $("#cbp-hrmenu"),
                menubtn = $(".activate-mobile-menu");

            function f() {

                g.on("click", a);
                b.on("click", function (h) {
                    h.stopPropagation()
                });
                menubtn.on("click", function(h){
                    menu.toggle();
                    if(menubtn.hasClass('active')){
                        menubtn.removeClass('active');
                        $('.mobile-responsive').removeClass('active');
                    }else{
                        menubtn.addClass('active');
                        $('.mobile-responsive').addClass('active');
                    }
                    d = 0;
                });


            }

            function a(j) {
                if (d !== -1) {
                    b.eq(d).removeClass("cbp-hropen")
                }
                var i = $(j.currentTarget).parent("li"),
                    h = i.index();
                if (d === h) {
                    i.removeClass("cbp-hropen");
                    d = -1;
                } else {
                    i.addClass("cbp-hropen");
                    d = h;
                    c.off("click").on("click", e);
                }
                return false

            }

            function e(h) {
                b.eq(d).removeClass("cbp-hropen");
                d = -1;
            }
            return {
                init: f
            }
        })();

        cbpHorizontalMenu.init();



    navHI = {
        sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)
        interval: 200, // number = milliseconds for onMouseOver polling interval
        timeout: 200, // number = milliseconds delay before onMouseOut
        over: function() {
            //show its submenu
            $('#browse-shows', this).addClass('arrow-show');
            $('#nav-menu', this).stop(false, true).slideDown(400);
        }, // function = onMouseOver callback (REQUIRED)
        out: function() {
            //hide its submenu
            $('#nav-menu', this).stop(false, true).slideUp(400);
            $('#browse-shows',this).removeClass('arrow-show');
        } // function = onMouseOut callback (REQUIRED)
    }

    $('#nav li').hoverIntent(navHI);

    $("#content .video-link:first-child + a + a .video").addClass('lastVideoRow');

    // Add 'current-menu-item' class to 'Watch' navigation on series pages:

    var currentTVEURL = document.URL;
    var onTVE = currentTVEURL.search('full-episodes');

    if(onTVE > 1){
        $("#nav-subheader li.first-child, #nav-subheader li.first-child .sub-menu li:first-child").addClass("current-menu-item");
    }
});



jQuery(function($) {
    //If there is only one slide, don't turn it into a slideshow.
    if($('#slides .video-link').length > 1 ){

        $('#slides').slidesjs({
            width: 940,
            height: 330,
            navigation: {
                active: "false"
            },
            pagination: {
                active: true,
                effect: "fade"
            },
            effect: {
                fade: {
                    speed: 800
                }
            },
            autoHeight: true,
            play: {
              active: true,
                // [boolean] Generate the play and stop buttons.
                // You cannot use your own buttons. Sorry.
              effect: "fade",
                // [string] Can be either "slide" or "fade".
              interval: 7000,
                // [number] Time spent on each slide in milliseconds.
              auto: true,
                // [boolean] Start playing the slideshow on load.
              swap: true,
                // [boolean] show/hide stop and play buttons
              pauseOnHover: true,
                // [boolean] pause a playing slideshow on hover
              restartDelay: 2500
                // [number] restart delay on inactive slideshow
            }
        });

        function calculateSlideHeight(){ //calculate dynamic height of slides, because slidesjs 3 disabled this...
            var $ = jQuery.noConflict();
            var slideHeight = $('.slidesjs-slide:first').height();
            $('.slidesjs-container').height(slideHeight);
        }
         $(window).load(function(){
        calculateSlideHeight(); //run once on init load
         });
        $(window).resize(function(){
            calculateSlideHeight(); //run again on screen resize
        });


    } else {
        //If there is only one slide, we still need to set the slide to display:block
        $('#slides, #slides .video-link').show();
    }
});

function doLogin() {
    if(document.URL.indexOf('/full-episodes') > 0) {
        ae.getAuthentication();
    } else {
        ae.getAuthentication('http://' + document.domain + '/full-episodes');
    }

    toggleMSOMenu();

}

function doLogout() {
    var $ = jQuery.noConflict();
    ae.logout();
    window.authenticatedWith = 'NonAuth';
    $('#login').html('<a href="javascript:void(0)" class="ca-track-click-events" data-action="click" data-label="login:tve" onclick="doLogin();">Sign in for full episodes & AMC Live</a>');
    $('#tve-top #top-right #availability').css('display', 'none');
    $('#tout.video-page-tout .video-player').css('display', 'none');
    $('#tout.video-page-tout .video-placeholder').css('display', 'block');

    _ca.registerEvents();
}

function showPopup(url) {

}

function showProviderPopup() {
    var $ = jQuery.noConflict();
    $('#login-overlay').fadeIn('fast');
    $('#wheres-my-provider').fadeIn('fast');
}

function showLearnMorePopup() {
    var $ = jQuery.noConflict();
    $('#login-overlay').fadeIn('fast');
    $('#learn-more').fadeIn('fast');
}

function hidePopups() {
    var $ = jQuery.noConflict();
    $('.popup').hide();
}

function getParameter(paramName) {
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return unescape(val[1]);
    }
  }
  return null;
}

/* RESPONSIVE FUNCTIONS */
function toggleMSOMenu(){
 var $ = jQuery.noConflict();
  if($(window).width() < 980){
    $('body').toggleClass('tve-push-menu-push-toleft');
    $('#tve-push-menu').toggleClass('tve-push-menu-open');
  }

}

function removeMSOMenu(){
  var $ = jQuery.noConflict();
    $('body').removeClass('tve-push-menu-push-toleft');
    $('#tve-push-menu').removeClass('tve-push-menu-open');
    $('.popup').hide();
    $('#login-overlay').hide();

}

/******************
* Brightcove      *
******************/





(function($){


	$(document).on('brightcove.events.onTemplateLoaded', function(evt, experienceID) {
		if(!isMobile.any() && !swfobject.hasFlashPlayerVersion("1")) {
			$('#tout.video-page-tout .video-link').css('display', 'none');
			$('#tout.video-page-tout .video').css('display', 'none');
			$('#tout.video-page-tout .BrightcoveExperience').css('display', 'none');
			$('#tout.video-page-tout .video-no-flash').css('display', 'block');
			return false;
		}

		// live video checks
		if(window.liveAsset){
			console.log('$$$$$$$$$$$$$$$$$$$$$$$$ live - onTemplateLoad $$$$$$$$$$$$$$$$$$$$$$$$$');
			bcLive.onTemplateLoad(experienceID);
		}
	});

	$(document).on('brightcove.events.ExperienceEvent.onTemplateReady', function(evt, experienceID) {

        //trigger new event to propigate onTemplateReady so others can listen to
        $(document).trigger('brightcove.events.ExperienceEvent.onTemplateReady.inception');

	    if(!isMobile.any() && !swfobject.hasFlashPlayerVersion("1")) {
	        return false;
	    }

	    // only execute the first time
	    if (done)
	        return;

	    // set adServerURL for BC
	    if(window.console)
	        console.log('authenticatedWith', window.authenticatedWith);


	    /* RESPONSIVE PLAYER */
		var currentPlayerWidth = 1;
		var $bodyDiv = $('#tout .video-player-left');
		var $videoContainer = $('.BrightcoveExperience');


		$(window).on('resize',function() {
			// ignore the resize on full screen adjustment - fixes chrome 35 bug
			if(AmcnBrightcove.mod.EXPERIENCE.experience.type == "html"){
				resizePlayer(currentPlayerWidth);
			}
		});


		// dynamic resizer
		$(document).ready(function(){
			resizePlayer(currentPlayerWidth); //initially size player on load
			setTimeout(function() {
				resizePlayer(currentPlayerWidth);
			}, 2000);
		});

		// resizing function
		function resizePlayer() {
			AmcnBrightcove.mod.EXPERIENCE.setSize($videoContainer.width(),$videoContainer.height());
            console.log('*************** VIDEO PLAYER RESIZED ***************');
            console.log($videoContainer.width() + ' x ' + $videoContainer.height());
		}

	    // define ad values
	    var networkCode = window.DFP_NETWORK_ID;
	    var topLevelAdUnit = window.DFP_TOP_LEVEL_AD_UNIT;
	    var companionAd_eid = "ad_companion_mid";
	    var cmsid = window.unauthorizedAsset == true ? window.DFP_CMS_ID_UNAUTH : window.DFP_CMS_ID;
	    var dimension = [DFP_MID_DIMENSION.w, DFP_MID_DIMENSION.h];
	    var videoID = $('.video-player').data('video_id');

	    AmcnBrightcove.mod.ADVERTISING.getAdPolicy(function (results) {
	        results.adServerURL = window.DFPServices.getBrightcoveAdServerURL({
	            'networkCode': networkCode,
	            'topLevelAdUnit': topLevelAdUnit,
	            's1': authenticatedWith,
	            'ciu_szs': dimension[0] + 'x' + dimension[1],
	            'cmsid': cmsid,
	            'videoID': videoID,
	            'url': window.location.href
	        });

            try {
                if(AmcnBrightcove.mod.VIDEO_PLAYER.experience.type !== 'flash') {
                   // re-enable midroll/preroll ads for HTML5
                   results.midrollAds = true;
                   results.prerollAds = true;

    	           AmcnBrightcove.mod.ADVERTISING.setAdPolicy(results, onAdPolicySetupComplete);
                   if(window.console)
                      console.log('>> newAdPolicy non-flash', results);
                }
            }
            catch(t) {
                console.log('>>>>>>>>>>>>>>>>>>> ', t);
            }





	        //Only load the video if it requires authentication - otherwise it will already be included in the player markup
	        if(!window.unauthorizedAsset) {
	            AmcnBrightcove.mod.VIDEO_PLAYER.loadVideoByID(videoID);
	        }
	    });

	    // live video checks
	    if(window.liveAsset){
	        console.log('$$$$$$$$$$$$$$$$$$$$$$$$ live - onTemplateReady $$$$$$$$$$$$$$$$$$$$$$$$$');
	        bcLive.onTemplateReady(evt);
	    }

	    done = true;
	});

	function onAdPolicySetupComplete() {
		if(window.console)
			console.log('adpolicy complete', AmcnBrightcove.mod.ADVERTISING.getAdPolicy());
	}

	$(document).on("brightcove.events.authEvent.authNeeded", function(evt, resource) {
		if(window.currentlyAuthenticated) {
			authResource = resource;
			try {
				if(window.console)
					console.log('Resource ID: ' + resource.resourceId);
				ae.getAuthorization(resource.resourceId);
			}
			catch(err) {
				if(window.console)
					console.log(err);
			}
		}
		else {
			return false;
		}
	});
}(jQuery));

// live stream functions
var bcLive = (function(){
    var onTemplateLoad, onTemplateReady, onProgress, onComplete, showMessage, hideMessage,
        resetCounters, player, APIModules, videoPlayer,
        options = {
            // amount of time (seconds) before running the check
            timeCheckPoint: 2*60*60,
            // how long the warning displays before pausing
            timeOut: 20
        },
        bcLiveOverlayMessage = jQuery("#bcLiveMessage"),
        bcLiveTimer = jQuery("#bcLiveTimer"),
        totalElapsedTime = 0,
        startTime = 0,
        initStartTime = false,
        timeSinceLastCheck = 0,
        intervalID;

    showMessage = function(){
        var secondsLeft = options.timeOut;
        console.log(secondsLeft);
        if(jQuery('html').hasClass('touch')){
            jQuery("#bcLiveMessage.inline-message").addClass("bcLive-shown").removeClass("bcLive-hidden");
        }
        else{
            jQuery("#bcLiveMessage.overlay-message").addClass("bcLive-shown").removeClass("bcLive-hidden");
        }

        // set up countdown
        intervalID = setInterval(function(){
            secondsLeft -= 1;
            jQuery(".bcLive-shown #bcLiveTimer").html(secondsLeft);
            console.log(secondsLeft);
            if(secondsLeft <= 0){
                // reset all countdowns
                bcLive.resetCounters();
                // pause video
                videoPlayer.pause(true);
                // hide overlay
                bcLive.hideMessage();
            }
        }, 1000);
    }

    hideMessage = function(){
        jQuery('#bcLiveMessage.inline-message').addClass("bcLive-hidden").removeClass("bcLive-shown");
        jQuery("#bcLiveMessage.inline-message #bcLiveTimer").html(options.timeOut);
        jQuery('#bcLiveMessage.overlay-message').addClass("bcLive-hidden").removeClass("bcLive-shown");
        jQuery("#bcLiveMessage.overlay-message #bcLiveTimer").html(options.timeOut);
    }

    // reset all counters
    resetCounters = function () {
        clearInterval(intervalID);
        totalElapsedTime = 0;
        startTime = 0;
        initStartTime = false;
        timeSinceLastCheck = 0;
        secondsLeft = options.timeOut;
        console.log('reset');
        bcLive.hideMessage();
        // reset the PROGRESS event listener
        videoPlayer.addEventListener(MediaEvent.PROGRESS, bcLive.onProgress);
    }

    // public functions
    // template loaded event handler
    onTemplateLoad = function (experienceID) {
        // get a reference to the player and API Modules and Events
        player = brightcove.api.getExperience(experienceID);
        APIModules = brightcove.api.modules.APIModules;
        MediaEvent = brightcove.api.events.MediaEvent;
    }
    // template ready event handler
    onTemplateReady = function (evt) {
        // only run on non-iphone/ipods
        if(!isMobile.iPhone()){
            // get references to modules
            videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
            // add event listener for progress, complete, and change
            videoPlayer.addEventListener(MediaEvent.PROGRESS, bcLive.onProgress);

            // set listener for the overlay message
            jQuery("#bcLiveMessage.inline-message").click(function () {
                // reset the counters and hide the message
                bcLive.resetCounters();
                bcLive.hideMessage();
            });
            jQuery("#bcLiveMessage.overlay-message").click(function () {
                // reset the counters and hide the message
                bcLive.resetCounters();
                bcLive.hideMessage();
            });
        }
    }
    // video progress handler
    onProgress = function (evt) {
        // initialize the startTime upon first progress check
        if(!initStartTime){
            startTime = evt.position;
            initStartTime = true;
        }
        totalElapsedTime = evt.position - startTime;

        // check for position or total elapsed time greater than check point
        if (totalElapsedTime > options.timeCheckPoint) {
            console.log('time check');
            videoPlayer.removeEventListener(MediaEvent.PROGRESS, bcLive.onProgress);
            bcLive.showMessage();
        }
    }

    // return the public functions
    return {
      onTemplateLoad : onTemplateLoad,
      onTemplateReady : onTemplateReady,
      onProgress : onProgress,
      showMessage : showMessage,
      hideMessage : hideMessage,
      resetCounters : resetCounters
    }
}());

/******************
* Adobe Callbacks *
******************/

//Called when the JavaScript Access Enabler has completed initialization and is ready to receive requests. This the entry point for your communication with the Access Enabler.
function entitlementLoaded() {
    ae.setRequestor(requestorID);
    ae.checkAuthentication();
}

// Called when an authorization request or a check-authorization request
// has completed successfully. Passes the ID for the resource for which authorization was 
// requested, and the authorization token provided by the MVPD.
function setToken(inRequestedResourceID, inToken) {
    if(window.console) {
        console.log('authorization request succeeded - ' + inToken, inRequestedResourceID);
        console.log(ae);
    }




    ae.getMetadata('maxRating');
    try {
        AmcnBrightcove.mod.AUTH.playWithToken(inToken, "adobepass"); //authResource.service);
    } catch(err) {
        if(window.console)
            console.log(err);
    }
}

//Called when an authorization or a check-authorization request has failed. Can optionally be used by an MVPD to provide a custom message to be displayed by the Programmer.
/*
 * Parameters:
 * inRequestedResourceID - A string providing the Resource ID that was used on the authorization request.
 * inRequestErrorCode - A string that displays the Adobe Pass error code, indicating the reason for the failure; possible values are "User Not Authenticated Error" and "User Not Authorized Error"; for more details, see "Callback error codes" below.
 * inRequestDetails - An additional descriptive string suitable for display, if available. Null if no string is supplied.
 * This can be used by an MVPD to pass custom error messages or sales-related messages. For example, if a subscriber is denied authorization for a resource, the MVPD could reply with an inRequestDetails message such as: "You currently do not have access to this channel in your package. If you would like to upgrade your package click *here*." The message is passed by Adobe Pass through this callback to the Programmer's site. The Programmer then has the option to display or ignore it. Adobe Pass can also use inRequestDetails to notify the Programmer of the condition that might have led to an error. For example, "A network error occurred when communicating with the provider's authorization service".
*/
function tokenRequestFailed(inRequestedResourceID, inRequestErrorCode, inRequestDetails) {
    var $ = jQuery.noConflict();
    if(window.console)
        console.log('tokenRequestFailed\n----------\n\n ' + inRequestedResourceID + '\n--------------\n\n' + inRequestErrorCode + '\n-------------\n\n' + inRequestDetails);

    var placeholderMessage = '<br/>Unfortunately it appears as if your user account is not authorized to view this content. This could be due to the following reasons:<br/>';
    placeholderMessage += '- This channel is not included in your paid TV subscription.<br/>';
    placeholderMessage += '- Your subscription is for Internet only.<br/>';
    placeholderMessage += '- Parental control settings may be blocking this content.<br/>';
    placeholderMessage += 'For further information, please contact your TV provider.<br/>';

    var errorMessage = inRequestDetails.length > 0 ? inRequestDetails.replace(/^https.*$/mg, "") : placeholderMessage; //Strip out URL - this assumes it's on a line by itself
    $('#tout.video-page-tout .video-error').html(errorMessage);
    $('#tout.video-page-tout .video-player').css('display', 'none');
    $('#tout.video-page-tout .video-error').css('display', 'block');
}

//Called upon completion of a checkAuthentication() request. Passes the authentication status (1=authenticated or 0=not authenticated), and a descriptive error message if any error occurred while attempting to determine the status (empty string on successful completion of the check).
/*
 * Parameters:
 * isAuthenticated - Provides authentication status: 1 (authenticated) or 0 (not authenticated).
 * errorCode - Any error that occurred when determining authentication status. An empty string if none.
*/
function setAuthenticationStatus(isAuthenticated, errorCode) {
    var $ = jQuery.noConflict();
    if(isAuthenticated) {
        window.currentlyAuthenticated = true;
        ae.getSelectedProvider();

        //make player visible
        $('#login').html('<a class="logout" href="javascript:void(0)" onclick="doLogout();" class="ca-track-click-events" data-action="click" data-label="logout:tve" >Log Out</a>&nbsp;|&nbsp;<a class="learn-more" href="http://www.amctv.com/full-episodes/learn-more">Learn More</a>');
        $('#tout.video-page-tout .video-player').css('display', 'block');

        //load player
        brightcove.createExperiences();
        _ca.registerEvents();

    } else {
        $('#login').html('<a href="javascript:void(0)" class="ca-track-click-events" data-action="click" data-label="login:tve" onclick="doLogin();">Sign in for full episodes & AMC Live</a>');
        $('#tve-top #top-right #availability').css('display', 'none');
        $('#tout.video-page-tout .video-placeholder').css('display', 'block');
        _ca.registerEvents();

        //Load legacy ad if user is unauthenticated and we're not on an unauthenticated video page
        if(!window.unauthorizedAsset) {
            if(window.DFPServices != undefined)
                window.DFPServices.loadIframeAd("#ad_companion_mid");
        }
    }

}

//Description: Callback triggered by the Access Enabler that delivers the metadata requested via a getMetadata() call.
/*
 * Parameters:
 * key: The name of the metadata for which the request was made.
 * args: This parameter is available only when the key is ‘TTL_AUTHZ’ or a User Metadata key. For ‘TTL_AUTHZ’, args is an array containing the resource id. For a User Metadata request, args is a Boolean value that specifies if the returned metadata is encrypted or not. For all other requests, args is null and should be ignored.
 * result: For simple requests (‘TTL_AUTHN’, ‘TTL_AUTHZ’, ‘DEVICEID’), result is a String (representing the Authentication TTL, Authorization TTL or Device ID). In case of a User Metadata request, result can be a primitive or JSON object representing the metadata payload. The exact structure of the user metadata objects is documented by Adobe.

 * Triggered by: getMetadata()
*/
function setMetadataStatus(key, args, result){
}

//Called when the selected MVPD requires an iFrame in which to display its authentication UI. You must implement this function in the script for your page that invokes login.
function createIFrame(inWidth, inHeight) {
}

//If you supply your own custom provider-selection UI, implement a simple interface that defines this callback function. Called when the login process is initiated. The parameter is an array of Objects representing the requested MVPDs:
//Your UI should use the display name (and optional logo) to provide the customer's choices, and send the associated ID for the chosen provider in the call to setSelectedProvider().

function displayProviderDialog(providers) {
    var $ = jQuery.noConflict();
    $('#login-overlay').fadeIn('fast');
    $('#login-form').fadeIn('fast');
    $('#login-form #provider-list').html('<option></option>');
    $('#login-form #provider-list-mobile').html('');

    var promotedlist = [
        'ATT',
        'Brighthouse',
        'Charter_Direct',
        'Cox',
        'Cablevision',
        'TWC',
        'Comcast_SSO',
        'Verizon',
        'DTV'
    ];

    var whitelist = [
        'ATT',
        'Brighthouse',
        'Charter',
        'Charter_Direct',
        'Cox',
        'Cablevision',
        'TWC',
        'Comcast_SSO',
        'Verizon',
        //'auth_cableone_net',
        'CableOne',
        'WOW',
        'Suddenlink',
        'Mediacom',
        'lus-fiber',
        'bektel',
        'liberty-cable',
        'msauth_midco_net',
        'auth_hawaiiantel_net',
        'epb_auth-gateway_net',
        'DTV'
    ];

    // This sets a new 'alphaName' Property for each provider.
    // That property should correspond to the image associated with each Provider's service.
    // For example, Adobe is represented graphically as 'Adobe'. However, Comcast is represented as 'Xfinity'.
    // The new property is then used to sort the list alphabetically.
    var alphaNames = {
        'TWC': 'Time Warner Cable',
        'Cablevision':'Optimum',
        'lus-fiber': 'LUS Fiber',
        'bektel': 'BEK Communications',
        'liberty-cable': 'Liberty Cablevision of PR',
        'msauth_midco_net': 'Midcontinent Communications',
        'auth_hawaiiantel_net': 'Hawaiian Telcom',
        'epb_auth-gateway_net': 'EPB Fiber Optics',
        'DTV': 'DirecTV'
    };

    var displayNames = {
        'TWC': 'Time Warner Cable',
        'Cable One': 'Cable ONE',
        'Brighthouse': 'Bright House Networks',
        'Charter': 'Charter Spectrum'
    }

    providers = providers.sort(function(a,b) {
        var compA = alphaNames[a.ID] === undefined ? a.ID : alphaNames[a.ID];
        var compB = alphaNames[b.ID] === undefined ? b.ID : alphaNames[b.ID];
        return compA > compB ? 1 : -1;
    });

    var lastAuth = window.lastAuthenticatedWith;

    var providerCounter = 0;

    //promoted providers
    if(addOnce == false){
        addOnce = true;

        
        $.each(providers, function(key, provider) {
            providerCounter++;
            if($.inArray(provider.ID, promotedlist) > -1) {

                var providerLogoImagePath = provider.logoURL;
                providerLogoImagePath = '/full-episodes/img/mvpd-logos/picker/' + provider.ID + '.png';
                var displayName = provider.displayName;
                if(displayNames[displayName]) displayName = displayNames[displayName];
                var selected = lastAuth == provider.ID ? ' selected="selected"' : '';

                $('#login-form #promoted-provider-wrapper').append('<div style="display: inline-block;" class="mvpd_option" onclick="if(navigator.userAgent.match(/iPad/i)){ae.setRequestor(\'AMC\', syncacoreRequestOptions);};createCookie(\'amc-tve-authn-clicked\', \'' + provider.ID + '\', 7); ae.setSelectedProvider(\'' + provider.ID + '\');"><img src="/full-episodes/img/mvpd-logos/picker/' + provider.ID + '.png"></div>');

            }
            
        });

    }

    //select dropdown
    $.each(providers, function(key, provider) {
        if($.inArray(provider.ID, whitelist) > -1) {
            var providerLogoImagePath = provider.logoURL;
            providerLogoImagePath = '/full-episodes/img/mvpd-logos/picker/' + provider.ID + '.png';
            var displayName = provider.displayName;
            if(displayNames[displayName]) displayName = displayNames[displayName];
            var selected = lastAuth == provider.ID ? ' selected="selected"' : '';
            $('#login-form #provider-list').append('<option class="mvpd_option" value="' + provider.ID + '" onclick="createCookie(\'amc-tve-authn-clicked\', \''+provider.ID+'\', 7);"' + selected + '>' + displayName + '</option>');
            $('#login-form #provider-list-mobile').append('<div style="display: inline-block;" class="mvpd_option" onclick="if(navigator.userAgent.match(/iPad/i)){ae.setRequestor(\'AMC\', syncacoreRequestOptions);};createCookie(\'amc-tve-authn-clicked\', \'' + provider.ID + '\', 7); ae.setSelectedProvider(\'' + provider.ID + '\');"><img src="/full-episodes/img/mvpd-logos/picker/' + provider.ID + '.png"></div>');
        }
    });



    $('#login-form #provider-list').on('change', function(evt, params) {
        // use request override for synacore to fix iPad issue
        if(navigator.userAgent.match(/iPad/i)){
            ae.setRequestor('AMC', syncacoreRequestOptions);
        }

        if(params) ae.setSelectedProvider(params.selected);

        //params is empty on mobile because Chosen does likes it that way, this will enable mobile users to log in.
        else ae.setSelectedProvider(this.value);
    });

    $('#login-form #provider-list').chosen({disable_search: true, placeholder_text_single: 'my cable or satellite provider is...'});
    /*if($(window).width() < 960){
        $('#login-form #provider-list').trigger('chosen:open');
    }*/


    jQuery(document).trigger('adobepass.displayProviderDialog', ['displayProviderDialog', {}]);
}

//The getSelectedProvider() function returns its result to this callback function.
/*
 * The result parameter is an Object with these properties:
 * MVPD The currently selected MVPD, or null if no MVPD was selected.
 * AE_State The result of authentication for the current customer, one of "New User", "User Not Authenticated", or "User Authenticated
*/
function selectedProvider(result) {
    var $ = jQuery.noConflict();
    if(result.MVPD == null) {
        window.authenticatedWith = 'NonAuth';
    } else {
        window.authenticatedWith = result.MVPD;
        createCookie('amc-tve-authn', result.MVPD);
        // note - does not display the newsletter modal, if there is another modal element present
        if(!readCookie('tve-newsletter-subscribed') && !readCookie('tve-newsletter-dismissed') && !jQuery('.modal-container').length) {
            createCookie('amc-tve-authn', authenticatedWith);
            $('#login-welcome').fadeIn('fast');
        }
    }

    //hack for omniture to make sure mso is caught on initial page load after login
    s.eVar4 = window.authenticatedWith;

    $('#tve-top #top-right #availability').html('<a href="' + MVPDHomepageURLs[window.authenticatedWith] + '" target="_blank"><img src="/full-episodes/img/mvpd-logos/authenticated/' + window.authenticatedWith + '.png" /></a>');
    $('#tve-top #top-right #availability').css('display', 'block');

    jQuery(document).trigger('adobepass.selectedProvider', ['selectedProvider', result]);
}

// Called to provide tracking data when specific events occur. You can use this, 
// for example, to keep track of how many users have logged in with the same credentials.
// Tracking is not currently configurable.
function sendTrackingData(trackingEventType, trackingData) {
    jQuery(document).trigger('adobepass.sendTrackingData', [trackingEventType, trackingData]);
}

/****************
* ISP Detection *
****************/

function getISP() {
    var serviceURL = 'http://score.services.amcnets.com/cgi-bin/true-ip-tve.cgi';
    var params = getSearchParameters();
    //if(window.console) console.log(params);
    jQuery.ajax({
        url: serviceURL,
        dataType: "jsonp",
        cache: true,
        data: params.testip ? {'testip': params.testip} : {},
        jsonpCallback: 'trueiptvecb',
        success: function(data) {
            if (window.console) console.log(data);
            if (data.isp != 'unspecified')
                window.lastAuthenticatedWith = data.isp;
        }
    });
}

/***************
* Random       *
***************/

/**
 * Function : dump()
 * Arguments: The data - array,hash(associative array),object
 *    The level - OPTIONAL
 * Returns  : The textual representation of the array.
 * This function was inspired by the print_r function of PHP.
 * This will accept some data as the argument and return a
 * text that will be a more readable version of the
 * array/hash/object that is given.
 * Docs: http://www.openjs.com/scripts/others/dump_function_php_print_r.php
 */
function dump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') { //Array/Hashes/Objects
        for(var item in arr) {
            var value = arr[item];

            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function createCookie(name,value,days) {
    var date = new Date();
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        date.setTime(date.getTime()+(10*365*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}


function getBrightcoveAdServerURL() {
    var networkCode = window.DFP_NETWORK_ID;
    var topLevelAdUnit = window.DFP_TOP_LEVEL_AD_UNIT;
    var companionAd_eid = "ad_companion_mid";
    var cmsid = window.unauthorizedAsset == true ? window.DFP_CMS_ID_UNAUTH : window.DFP_CMS_ID;
    var dimension = [DFP_MID_DIMENSION.w, DFP_MID_DIMENSION.h];
    var videoID = jQuery('.video-player').data('video_id');

    if(typeof window.DFPServices.hasCompanionAdLoaded == "undefined") {
        window.DFPServices.hasCompanionAdLoaded = true;
        window.DFPServices.loadCompanionAd({
            'networkCode': networkCode,
            'topLevelAdUnit': topLevelAdUnit,
            's1': authenticatedWith,
            'pos': 'top',
            "eid": companionAd_eid,
            'dimension': dimension,
            'cmsid': cmsid,
            'videoID': videoID
        });
    }
    // load Companion Ad

    return window.DFPServices.getBrightcoveAdServerURL({
        'networkCode': networkCode,
        'topLevelAdUnit': topLevelAdUnit,
        's1': authenticatedWith,
        'ciu_szs': dimension[0] + 'x' + dimension[1],
        'cmsid': cmsid,
        'videoID': videoID,
        'url': window.location.href
    });
}
