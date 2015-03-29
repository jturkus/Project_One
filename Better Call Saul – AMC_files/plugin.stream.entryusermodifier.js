/*
 ***********************************************************
 *
 * StreamEntryUserModifier
 * Plugin used to Modify Entry User information
 *
 * @author Yoshitaka Ito
 * @version 1.0 - 2011/09/25 - initial deployment
 *
 ***********************************************************
 */
;(function($){


	// Replace adding data to this id with $.data on the rainy day.
	var user_db_id = "user_map_" + new Date().getTime();

	/**
	 * StreamEntryUserModifier is updated version 
	 * 
	 * @author Yoshitaka Ito
	 * @version 0.2 - 2011/02/28
	 * @version 0.21 - 2011/04/08 - Updated calls to the usearch to make the calls more flexible
	 * @version 0.3 - 2011/09/25 - Updated to include item container here to add classes.
	 */
	var plugin = Echo.createPlugin({	
		"name": "StreamEntryUserModifier",
		"applications": ["Stream"],
		"init": function(plugin, application) {
			plugin.extendRenderer("Item", "authorName", plugin.extendedAuthNameItemRenderer);
			plugin.extendRenderer("Item", "avatar", plugin.extenedAvatarItemRenderer);
			plugin.extendRenderer("Item", 'container', plugin.extendItemContainerRenderer);
		}
	});
	
	
	/**
	 * This adds classes to item-containers. This should be extended to
	 * add badges, if required in the future.
	 */
	plugin.extendItemContainerRenderer = function(element, dom) { 
		
       	var classes = []; 
       	$.map(this.data.actor.roles || [], function(role) { 
			classes.push("echo-item-user-role-" + role); 
       	}); 
       	$.map(this.data.actor.markers || [], function(marker) { 
			classes.push("echo-item-user-marker-" + marker); 
       	}); 
       	if (this.data.actor.status) { 
			classes.push("echo-item-user-status-" + this.data.actor.status); 
       	} 
       	if (classes.length) { 
			$(element).addClass(classes.join(" ")); 
       	}
		this.parentRenderer("container", arguments);
		
	}

	
	// overrides default authorName behaviour
	plugin.extendedAuthNameItemRenderer = function(element, dom) {
		if(this.data.actor.title && this.data.actor.id) {
			var id = this.data.actor.id.replace(/http:.*?amctv.com/, "http://www.amctv.com");
			var title = this.data.actor.title;

			if(id.startsWith("http://www.amctv.com/users")) {
				var link = $('<a class="echo-authname-link"/>')
							.attr('href', id + encodeURI(this.data.actor.title.replace(" ", "-").toLowerCase()))
							.attr('title', "view " + title + "'s user profile")
							.addClass('echo-linkColor').html(title);
			}
			else {
				var element_id = md5(id); // md5 hash the element so its easy to find as a class
				var link = $('<a class="echo-authname-link author_name unanchored"/>')
							.addClass(element_id)
							.html(title);
			}
		}
		link = $('<div class="echo-authname-wrapper"/>').append(link);
		return link || this.label("guest");
	};

	// overrides default avatar behaviour
	plugin.extenedAvatarItemRenderer = function(element, dom) {
		var item = this;
		var config = function(key) {
			return plugin.config.get(item, key);
		};
		var size = (!this.depth ? 48 : 24);

		if(config("avatarWidth")) 
			size = config("avatarWidth");
			
		var avatar = this.data.actor.avatar || this.user.get("defaultAvatar");	
		if(this.data.actor.title && this.data.actor.id) {
			var id = this.data.actor.id.replace(/http:.*?amctv.com/, "http://www.amctv.com");

			if(id.startsWith("http://www.amctv.com/users")) {
				var title = "" + this.data.actor.title;
				var link = $('<a/>')
							.attr('href', id + encodeURI(this.data.actor.title.replace(" ", "-").toLowerCase()))
							.attr('title', "view " + title + "'s user profile");     
				$(link).append('<img src="' + $.htmlize(avatar) + '" width="' + size + '"/>');

				return link;
			}
			else {
				var title = "" + this.data.actor.title;
				var link = $('<a>').addClass(md5(id)).addClass("author_avatar");
				$(link).append('<img src="' + $.htmlize(avatar) + '" width="' + size + '"/>');
				return link;
			}
		}
		else {
			return $('<img src="' + $.htmlize(avatar) + '" width="' + size + '">').get(0);
		}
	}
	
	
	
}) (jQuery);