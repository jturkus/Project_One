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
	"name": "Whirlpools",
	"applications": ["Stream"],
	"init": function(plugin, application) {
		var config = plugin.config.get(application);
		var after = (typeof config.after == "undefined" ? 2 : config.after);
		var count = after / 2;
		application.config.combine({
			"after": after,
			"legacy": Math.floor(count),
			"recent": Math.ceil(count)
		}, config);
		plugin.listenEvents(application);
		plugin.addCss(plugin.css);
		plugin.extendRenderer("Item", "children", plugin.renderers.Item.children);
	}
});

plugin.addLabels({
	"moreExpand": "more (expand)",
	"moreItems": "more items"
});

//we should disable Whirlpools plugin if children pagination feature is "on"
plugin.listenEvents = function(application) {
	plugin.subscribe(application, "Stream.onDataReceive", function(topic, data) {
		if (application.isChildrenPaginationEnabled && application.isChildrenPaginationEnabled()) {
			application.disablePlugin(plugin.name);
		}
	});
};

plugin.initMarker = function(item, collapsedItemsCount) {
	return new plugin.Marker({
		"after": plugin.config.get(item, "after"),
		"count": collapsedItemsCount,
		"depth": item.depth + 1,
		"clickable": plugin.config.get(item, "clickable")
	}, {
		"onexpand": function() {
			plugin.set(item, "expanded", true);
			item.rerender("children");
		}
	});
};

plugin.renderers = {"Item": {}};

plugin.renderers.Item.children = function(element, dom) {
	var item = this;
	var args = arguments;
	var config = plugin.config.get(item);
	var clearFlags = function(item) {
		// we should cleanup the flags for the collapsed items
		// because they are not handled by the rendering engine
		// and therefore remains in the item, but they are not necessary
		// after the children list rendering is complete
		delete item.deleted;
		delete item.added;
	};
	var substitute = function(children) {
		var _children = item.children;
		item.children = children;
		item.parentRenderer("children", args);
		item.children = _children;
	};
	// too few items to be collapsed or list already expanded
	if (!item.children.length ||
		item.children.length <= config.after ||
		plugin.get(item, "expanded")) {
			item.parentRenderer("children", args);
			return;
	}
	// display only expand marker
	if (config.after == 0 && item.children.length) {
		var count = item.traverse(item.children, function(item, acc) {
			clearFlags(item);
			return ++acc; 
		}, 0);
		substitute([plugin.initMarker(item, count)]);
		return;
	}
	// display items & expand marker
	var slice = item.children.slice(config.recent, item.children.length - config.legacy);
	var count = item.traverse(slice, function(item, acc) {
		clearFlags(item);
		return ++acc;
	}, 0);
	var children = [].concat(
		plugin.getRecentChildren(item, config.recent),
		plugin.initMarker(item, count),
		plugin.getLegacyChildren(item, config.legacy)
	);
	substitute(children);
};

plugin.getRecentChildren = function(item, count) {
	var position = count;
	for (var i = 0; i < count; i++) {
		if (item.children[i].added || item.children[i].deleted) {
			var flag = item.children[i].added ? "deleted" : "added";
			item.children[position++][flag] = true;
		}
	}
	return item.children.slice(0, position);
};

plugin.getLegacyChildren = function(item, count) {
	var length = item.children.length;
	var position = length - count;
	for (var i = length - count; i < length; i++) {
		if (item.children[i].added || item.children[i].deleted) {
			var flag = item.children[i].added ? "deleted" : "added";
			item.children[--position][flag] = true;
		}
	}
	return item.children.slice(position);
};

plugin.Marker = function(data, callbacks) {
	data.label = this.label("more" + (data.clickable ? "Expand" : "Items"));
	this.init({
		"data": data,
		"callbacks": callbacks
	});
};

plugin.Marker.prototype = new Echo.Object();

plugin.Marker.prototype.namespace = "Plugins.Whirlpools";

plugin.Marker.prototype.cssPrefix = "echo-whirlpool-";

plugin.Marker.prototype.renderers = {};

plugin.Marker.prototype.template =
	'<div class="echo-whirlpool-container echo-trinaryBackgroundColor echo-item-depth-{Data:depth} echo-item-container-child">' +
		'<span class="echo-whirlpool-message">{Data:count} {Data:label}</span>' +
	'</div>';

plugin.Marker.prototype.renderers.container = function(element) {
	var self = this;
	if (this.data.clickable) {
		element.addClass("echo-clickable").click(function() {
			self.callbacks.onexpand();
		});
	}
	if (this.data.after == 0) {
		element.addClass(this.cssPrefix + "container-collapse-all");
	}
};

plugin.Marker.prototype.renderers.message = function(element) {
	if (this.data.clickable) {
		element.addClass("echo-linkColor");
	}
};

plugin.css =
	'.echo-whirlpool-container { text-align: center; }' +
	'.echo-whirlpool-container-collapse-all { text-align: left; }' +
	'.echo-whirlpool-message { display: inline-block; padding-left: 18px; background: url("//cdn.echoenabled.com/images/whirlpool.png") no-repeat center left; }';

})(jQuery);


