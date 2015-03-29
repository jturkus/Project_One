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
	"name": "JanrainSharing",
	"applications": ["Submit"],
	"init": function(plugin, application) {
		// avoid nonsynchronized scripts cache issue
		if (!Echo.Global) Echo.Global = {};
		if (!plugin.config.get(application, "appId") ||
			!plugin.config.get(application, "xdReceiver")) return;
		plugin.listenEvents(application);
	}
});

// actual limit is 140, reserving some space for ellipses and shortened link to the page
plugin.contentMaxLength = 120;

plugin.addLabels({
	"sharePrompt": "Share your comment:"
});

plugin.isReplyToTweet = function(item) {
	return !!(item && item.source && item.source.name == "Twitter");
};

plugin.getTweetAuthor = function(item) {
	return item.actor.id.replace(/https?\:\/\/twitter\.com\//, "");
};

plugin.truncate = function(text, limit) {
	return limit > 0 && text.length > limit ? text.substring(0, limit) + "..." : text;
};

plugin.prepareContent = function(args, application) {
	var text = $.stripTags(args.postData.content);
	var customShareMessagePattern = plugin.config.get(application, "activity.shareContent");
	if (customShareMessagePattern) {
		return plugin.label(customShareMessagePattern, {
			"domain": window.location.host,
			"content": plugin.truncate(text, 30)
		});
	}
	// if a reply to a tweet was posted
	if (plugin.isReplyToTweet(args.inReplyTo)) {
		var author = plugin.getTweetAuthor(args.inReplyTo);
		return plugin.label("@{author} {content}", {
			"author": author,
			"content": plugin.truncate(text, plugin.contentMaxLength - author.length - 2)
		});
	}
	return plugin.truncate(text, plugin.contentMaxLength);
};

plugin.listenEvents = function(application) {
	var key = "subscriptionID-" + application.getContextId();
	if (plugin.get(Echo.Global, key)) return;
	var subscriptionID = plugin.subscribe(application, "Submit.onPostComplete", function(topic, args) {
		var config = function(key, defaults) {
			return plugin.config.get(application, key, defaults);
		};
		var rpxJsHost = ("https:" == document.location.protocol)
			? "https://"
			: "http://static.";
		$.loadScriptContent(rpxJsHost + "rpxnow.com/js/lib/rpx.js", function() {
			RPXNOW.init({
				"appId": config("appId"),
				"xdReceiver": config("xdReceiver")
			});
			RPXNOW.loadAndRun(["Social"], function () {
				var activity = new RPXNOW.Social.Activity(
					config("activity.sharePrompt", plugin.label("sharePrompt")),
					plugin.prepareContent(args, application),
					config("activity.itemURL", args.targetURL)
				);
				if (config("activity.pageDescription")) {
					activity.setDescription(config("activity.pageDescription"));
				}
				if (config("activity.pageTitle")) { 
					activity.setTitle(config("activity.pageTitle"));
				}
				if (config("activity.pageImages")) {
					var collection = new RPXNOW.Social.ImageMediaCollection();
					var count = 0;
					$.each(config("activity.pageImages"), function(key, image) {
						if (count == 5) return false;
						if (image.src && image.href) {
							collection.addImage(image.src, image.href);
							count++;
						}
					});
					activity.setMediaItem(collection);
				}
				RPXNOW.Social.publishActivity(activity);
			});
		});
	});
	plugin.set(Echo.Global, key, subscriptionID);
};

})(jQuery);

