/************************************************
 *
 * Echo Controlling Scripts.
 *
 ************************************************
 */

/*
 * For Debugging
 */
function console_log(str) {
	if(window.console)	
		console.log(str);
}


// Echo API Key
var appKey = 'prod.amctv.com';

// Match Domain
document.domain = 'amctv.com';

// use it to create arbitrary string
function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

// creating stream clients
var echoStreamClients = new Array();
var echoCounterClients = new Array();
var echoSubmitClients = new Array();

function initEchoClientsByMarkup(){
	(function($) {
				
		// init user data
		var user = new Echo.User({"appkey": appKey });
        user.init(function(){

				// Echo2 Submit Client Invocations
				EchoTools.Factory.getInstance().createSubmitClients(user);
				EchoTools.Factory.getInstance().createStreamClients(user);
				EchoTools.Factory.getInstance().createStreamSorter(user);
				EchoTools.Factory.getInstance().createStreamCounter(user);
				EchoTools.Factory.getInstance().createRiver(user);
				EchoTools.Factory.getInstance().createUserFeed(user);
				EchoTools.Factory.getInstance().createUserFeedCounter(user);
				EchoTools.Factory.getInstance().createUserFeedSorter(user);
				EchoTools.Factory.getInstance().createTalkStream(user);
		});	  	
	  	
  	})(jQuery);
	
}



/**
 * Used to refresh Echo Counter. Only works for those clients instantiated by method initEchoClientsByMarkup.
 * @return true if successful
 */
function refreshEchoCounterClient(selector, query) {
	(function($) {
		var id = $(selector).attr('id');
		if(id && echoCounterClients[id]) {
			echoCounterClients[id].config.set("query", query);
			echoCounterClients[id].refresh();
		}
	})(jQuery);
}
/**
 * Used to refresh Echo Counter. Only works for those clients instantiated by method initEchoClientsByMarkup.
 * @return true if successful
 */
function refreshEchoStreamClient(selector, query) {
	(function($) {
		var id = $(selector).attr('id');
		if(id && echoStreamClients[id]) {
			echoStreamClients[id].config.set("query", query);
			echoStreamClients[id].refresh();
		}
	})(jQuery);
}
/**
 * Used to refresh Echo Counter. Only works for those clients instantiated by method initEchoClientsByMarkup.
 * @return true if successful
 */
function refreshEchoSubmitClient(selector, target) {
	(function($) {
		var id = $(selector).attr('id');
		if(id && echoSubmitClients[id]) {
			echoSubmitClients[id].config.set("targetURL", target);
			echoSubmitClients[id].refresh();
		}
	})(jQuery);
}


(function($) {
		
	// backplane channel name. channelname is last portion of channel id
	var bp_channel_cookie_name = 'www_amc_bp_channelname';
	
	// Create Random Integer. This is to force backplane across crossdomian, as it seems fickle
	// when multiple domains are involved
	var amc_bp_channel = $.cookie(bp_channel_cookie_name);
	if(!amc_bp_channel) {
		amc_bp_channel = md5(new Date().getTime() + randomString());
		$.cookie(
			bp_channel_cookie_name, 
			amc_bp_channel, 
			{ 
				expires: 1440, 
				path: '/', 
				domain: '.amctv.com' 
			}
		);
	};
	
	
	// Initialize Backplane
	Backplane.init({
		"serverBaseURL" : "http://api.echoenabled.com/v1",
		"busName": "amctv.com",
		"channelName" : amc_bp_channel
	});
	
	
	// save the channel id to a cookie with jquery. Make sure this is a crossdomain cookie!!!
	$.cookie(
		'www_bp_channel_id', 
		Backplane.getChannelID(), 
		{ 
			expires: 1440, 
			path: '/', 
			domain: '.amctv.com' 
		}
	);
		
	// After everything has reponsded, lets add commenting engines
	$(function() {
		var echoInitInterval = setInterval(function(){
			if(mySessionVerified) {
				initEchoClientsByMarkup();				
				clearInterval(echoInitInterval);
			}
		}, 100);
	});

})(jQuery);