/*
 *******************************************************************************************
 *
 * UserQuarantine
 *
 * Plugin used to set the status of users statis as "Quarantine"
 *
 * @author Yoshitaka Ito
 * @version 1.0 - Initial Deployment 
 *
 *******************************************************************************************
 */

;(function($){

/**
 * Custom Plugin. UserQuarantine
 * 
 * Default Plugin to set user status as "Quarantine" for AMC. The state is used for
 * extra flexibility in the moderation.
 * 
 */
var plugin = Echo.createPlugin({
       "name": "UserQuarantine",
       "applications": ["Stream"],
       "init": function(normalizer, application) {
	
        	plugin.addItemControl(application, plugin.assembleControl("Quarantine", application));
			plugin.addItemControl(application, plugin.assembleControl("Unquarantine", application));
			plugin.addCss(plugin.css);
       }
});

plugin.addLabels({
	"quarantine": "Quarantine",
	"unquarantine": "Unquarantine",
	"quarantined": "Quarantined",
	"processingAction": "Setting up '{state}' user state..."
});
plugin.controlLabels = {
	"quarantined": 
		'<span class="echo-item-control-state echo-item-control-state-quarantined">' 
			+ plugin.label("quarantined") + '</span>' 
			+ '(<span class="echo-clickable">' + plugin.label("unquarantine") + '</span>)', 
	"unquarantine": 
		'<span class="echo-clickable">' + plugin.label("quarantine") + '</span>'
};





plugin.assembleControl = function(action, application) {
	var callback = function() {
		var item = this;
		var newState = action == "Quarantine" ? "Quarantine" : "Unquarantine";
		item.controls[plugin.name + "." + action]
			.element
			.empty()
			.append(plugin.label("processingAction", {"state": newState}));
		
		
		$.getJSON(
			( 
				action == 'Quarantine' ? 
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/users.markers.add?callback=?" : 
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/users.markers.remove?callback=?"			), 
			{ 
				'identityURL' : item.data.actor.id,
				"markers" : ["ModeratorQuarantined"]			}, 
			function(res) {
				if (!res || !res.success ) {
					item.rerender();
					return;
				}
				$.map(application.threads, function(thread) {
					thread.traverse(thread.children, function(child) {
						plugin.applyUserStateUpdate(child, item, newState);
					});
					plugin.applyUserStateUpdate(thread, item, newState);
				});
			}
		);
	};
	return function() {
		var item = this;
		var isQuarantined = plugin.isQuarantined(item);
		var visible = item.data.actor.id != item.user.get("fakeIdentityURL") && isQuarantined ^ (action == "Quarantine");
		return {
			"name": action,
			"label": plugin.controlLabels[isQuarantined ? "quarantined" : "unquarantined"],
			"visible": visible && item.user.isAdmin(),
			"callback": callback,
			"onetime": true
		};
	};
};


plugin.isQuarantined = function(item) {
	for(var i in item.data.actor.markers) {
		if(item.data.actor.markers[i] == "ModeratorQuarantined")
			return true;
	}
	return false;
};

plugin.applyUserStateUpdate = function(target, source, state) {
	if (target.data.actor.id != source.data.actor.id) return;
	
	
	// setup markers
	var markers = target.data.actor.markers;
	if(state == 'Quarantine') {
		for(var i in markers) {
			if(markers[i] == "-ModeratorQuarantined")
				markers[i] = "ModeratorQuarantined";
		}
	}
	else {
		for(var i in markers) {
			if(markers[i] == "ModeratorQuarantined")
				markers[i] = "-ModeratorQuarantined";
		}
	}
	target.data.actor.markers = markers;
	
	target.rerender();
};

plugin.css =
	".echo-item-control-state { margin-right: 3px; }" +
	".echo-item-control-state-quarantined { color: #FF0000; }";



})(jQuery);