AmcnBrightcove = {
	API: {
		FLASH_ONLY: 'FLASH_ONLY',
		JS: 'JS'
	},
	data: {},
	events: {},
	mod: {},
	registeredEventTriggers: {},


	// DIY Ajax getJSON method
	ajax: {
		xhr: function() {
			var instance = new XMLHttpRequest();
			return instance;
		},
		getJSON: function(options, callback) {
			var xhttp = this.xhr();
			options.url = options.url || location.href;
			options.data = options.data || null;
			callback = callback || function() {};
			options.type = options.type || 'json';
			var url = options.url;
			if (options.type == 'jsonp') {
			    window.jsonCallback = callback;
			    var $url = url.replace('callback=?', 'callback=jsonCallback');
			    var script = document.createElement('script');
			    script.src = $url;
			    document.body.appendChild(script);
			}
			xhttp.open('GET', options.url, true);
			xhttp.send(options.data);
			xhttp.onreadystatechange = function() {
			    if (xhttp.status == 200 && xhttp.readyState == 4) {
			        callback(JSON.parse(xhttp.responseText));
			    }
			};
		}
	}
};
AmcnBrightcove.encodeQuery = function(data){
   var ret = [];
   for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
   return ret.join("&");
}

AmcnBrightcove.log = function() {
	if(window.console && arguments.length > 0) {
		console.log('-------- AmcnBrightcove.log ---------');
		for(var i in arguments)
			console.log(arguments[i]);
	}
};
AmcnBrightcove.getAPI = function() {
	return AmcnBrightcove.data.api;
};
AmcnBrightcove.onTemplateLoaded = function(experienceID) {

	AmcnBrightcove.log('onTemplateLoaded');

	// reset, as this is re-initializing onTemplateLoaded
	AmcnBrightcove.onTemplateReadyFired = false;

	// store player and experience ID
	AmcnBrightcove.player = brightcove.api.getExperience(experienceID);
	AmcnBrightcove.experienceID = experienceID;

	// sniff for player used
	if(AmcnBrightcove.player) {
		AmcnBrightcove.data.api = AmcnBrightcove.API.JS;
	}
	else {
		AmcnBrightcove.player = brightcove.getPlayer(experienceID);
		AmcnBrightcove.data.api = AmcnBrightcove.API.FLASH_ONLY;

		// load flash API only mod
		AmcnBrightcove.mod = {
			'SOCIAL': AmcnBrightcove.player.getModule("social")
		};
	}


	// load mods available
	for(var k in brightcove.api.modules.APIModules) {
		AmcnBrightcove.mod[k] = AmcnBrightcove.player.getModule(brightcove.api.modules.APIModules[k]);
	}

	if(jQuery) {
		var eventName = 'brightcove.events.onTemplateLoaded';
		jQuery(document).trigger(eventName, experienceID);
		AmcnBrightcove.registeredEventTriggers[eventName] = AmcnBrightcove.registeredEventTriggers[eventName] + 1 || 1;
		if(window.console) console.log('template loaded');
	}
};
AmcnBrightcove.onTemplateReadyFired = false;
AmcnBrightcove.onTemplateReady = function(evt) {

	// handle bug where onTemplateReady event is fired twice
	// BC-32369. http://support.brightcove.com/en/video-cloud/docs/known-issues
	if(AmcnBrightcove.onTemplateReadyFired) {
		return;
	}
	AmcnBrightcove.onTemplateReadyFired = true;


	AmcnBrightcove.log('onTemplateReady Called');

	var events = [brightcove.api.events.AdEvent.START, brightcove.api.events.AdEvent.COMPLETE];
	for(var i=0; i < events.length; i++) {
		AmcnBrightcove.events[events[i]] = { 'name': 'brightcove.events.adEvent.' + events[i] };
		AmcnBrightcove.mod.ADVERTISING.addEventListener(events[i], function(event) {

			// queue jQuery event
			if(jQuery) {
				var eventName = 'brightcove.events.adEvent.' + event.type;
				jQuery(document).trigger(eventName, event);
				AmcnBrightcove.registeredEventTriggers[eventName] = AmcnBrightcove.registeredEventTriggers[eventName] + 1 || 1;
			}
		});
	}

	var events = [brightcove.api.events.AuthEvent.AUTH_NEEDED];
	for(var i=0; i < events.length; i++) {
		AmcnBrightcove.events[events[i]] = { 'name': 'brightcove.events.authEvent.' + events[i] };
		AmcnBrightcove.mod.AUTH.addEventListener(events[i], function(event) {
			if(jQuery) {
				var eventName = 'brightcove.events.authEvent.' + event.type;
				jQuery(document).trigger(eventName, event);
				AmcnBrightcove.registeredEventTriggers[eventName] = AmcnBrightcove.registeredEventTriggers[eventName] + 1 || 1;
			}
		});
	}

	for(var k in brightcove.api.events.MediaEvent) {

		AmcnBrightcove.events[brightcove.api.events.MediaEvent[k]] = { 'name': 'brightcove.events.mediaEvent.' + brightcove.api.events.MediaEvent[k] };
		AmcnBrightcove.mod.VIDEO_PLAYER.addEventListener(brightcove.api.events.MediaEvent[k], function(event) {


			// check the API and event type and update encodeQuery
			if(AmcnBrightcove.getAPI() === AmcnBrightcove.API.FLASH_ONLY && AmcnBrightcove.mod.SOCIAL && event.type === 'mediaBegin') {

				AmcnBrightcove.log('start media play');

				// query this via DIY GET method so there is no dependency to jQuery
				var url = "http://www.amctv.com/commons/brightcove/get.embedCode?";
				url += AmcnBrightcove.encodeQuery({
					'videoId': event.media.id,
					'width': 480,
					'height': 270,
					'playerId': bc_params.playerId,
					'playerKey': bc_params.playerKey
				});
				AmcnBrightcove.ajax.getJSON({ 'url': url, 'type': 'json' }, function(json) {
					AmcnBrightcove.log(json);
					AmcnBrightcove.mod.SOCIAL.setEmbedCode(json.data.html);
				});

			}
			// trigger jQuery event
			if(jQuery) {
				var eventName = 'brightcove.events.mediaEvent.' + event.type;
				AmcnBrightcove.registeredEventTriggers[eventName] = AmcnBrightcove.registeredEventTriggers[eventName] + 1 || 1;
				jQuery(document).trigger(eventName, event);
			}
		});
	}



	if(jQuery) {
		var eventName = 'brightcove.events.ExperienceEvent.onTemplateReady';
		AmcnBrightcove.registeredEventTriggers[eventName] = AmcnBrightcove.registeredEventTriggers[eventName] + 1 || 1;
		jQuery(document).trigger(eventName, evt);
	}

};



//  Sample as to how to handles mediaBegin event
/*
jQuery(document).on('brightcove.events.mediaEvent', function(evt, bc_evt) {
	console.log('=media event');
});
*/