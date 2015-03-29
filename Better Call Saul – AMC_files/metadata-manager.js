// vim: set ts=8 sts=8 sw=8 noet:
/*
 * Copyright (c) 2006-2011 Echo <solutions@aboutecho.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * Version: v2.6.34
 */

(function($) {

var plugin = Echo.createPlugin({
	"name": "MetadataManager",
	"applications": ["Stream"],
	"init": function(plugin, application) {
		var controls = plugin.config.get(application, "controls");
		$.each(controls, function(i, control) {
			plugin.addItemControl(application, plugin.assembleControl("Mark", control, application));
			plugin.addItemControl(application, plugin.assembleControl("Unmark", control, application));
		});
	}
});

plugin.addLabels({
	"markProcessing": "Adding {type} {marker}...",
	"unmarkProcessing": "Removing {type} {marker}..."
});

plugin.assembleControl = function(action, control, application) {
	var type = control.marker ? "marker" : "tag";
	var marker = (control.marker || control.tag);
	var name = action + "As" + marker.replace(/[^a-z0-9_-]/ig, '');
	var callback = function() {
		var item = this;
		var operation = action.toLowerCase();
		item.controls[plugin.name + "." + name].element
			.empty()
			.append(plugin.label(operation + "Processing", {"type": type, "marker": marker}));
		var data = {
			// translate mark/unmark operations into tag/untag/mark/unmark verbs
			"verb": type == "tag" ? operation.replace(/mark/g, "tag") : operation,
			"target": item.id
		};
		data[type + "s"] = marker;
		$.get(plugin.config.get(application, "submissionProxyURL", "", true), {
			"appkey": application.config.get("appkey"),
			"content": $.object2JSON(data),
			"target-query": application.config.get("query", ""),
			"sessionID": item.user.get("sessionID", "")
		}, function() {
			application.startLiveUpdates(true);
		}, "jsonp");
	};
	return function() {
		var item = this;
		return {
			"name": name,
			"label": control["label" + action],
			"visible": plugin.isControlVisible(application, item, control, marker, action, type),
			"onetime": true,
			"callback": callback
		};
	};
};

plugin.isControlVisible = function(application, item, control, marker, action, type) {
	var visible = ($.inArray(marker, item.data.object[type + "s"] || []) == -1) ^ (action == "Unmark");
	if (!visible || !item.user.logged()) return false;
	if (item.user.isAdmin()) return true;
	var customProxyURL = plugin.config.get(application, "submissionProxyURL");
	if (type == "marker" && !customProxyURL) return false;
	control.visible = control.visible || function() { return false; };
	if ($.isFunction(control.visible)) {
		return control.visible(application, item);
	}
	if ($.isEmptyObject(control.visible)) return false;
	var isVisible = true;
	$.each(["state", "roles", "markers"], function(i, field) {
		var values = control.visible["user." + field];
		if (values) {
			values = typeof values == "string" ? [values] : values;
			if (!item.user.hasAny(field, values)) {
				isVisible = false;
				return false; // break
			}
		}
	});
	return isVisible;
};

})(jQuery);

