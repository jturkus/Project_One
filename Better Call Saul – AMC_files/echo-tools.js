/*
 ***************************************************************************
 *
 * EchoTools Classes. These are helper function to avoid
 * coding oft used method all over the place.
 *
 * @author Yoshitaka Ito
 * @version 1.0 - 2011/09/25 - initial deployment
 * @version 2.2 - 2012/10/03 - updated to delimit user (private) queries to
 * past 6 months due to echo restriction.
 * version 2.2 - 2013/05/03 - updated to delimit user (private) queries to
 * past 13 weeks due to echo restriction.
 *
 ***************************************************************************
 */




/**
 * Echo Tool Class. Parent class. Does nothing by itself.
 */
function EchoTools() {}

/*
 ***************************************************************************
 *
 * Declaring Subclassess here, for clear organization as to what subclasses
 * exists currently.
 *
 ***************************************************************************
 */
EchoTools = {
	_echoFactoryCreated : false,
	Backplane : function() {},
	EQL : function() {},
	Factory : function() {
		
		if(!EchoTools._echoFactoryCreated) {
		
			var my = this;
			(function($){
				var interval = setInterval(function() {
					var disabledClass = 'echoClient-factory-disabled';
					$.each(my.streamClients, function(id,client){
						var e = $("#" + id);
						if(e.is(':hidden') && !e.hasClass(disabledClass)) {
							streamClient = my.streamClients[id];
							streamClient.config.set("liveUpdates", false);
							streamClient.refresh();
							e.addClass(disabledClass);
						}
						else if(e.is(':visible') && e.hasClass(disabledClass)) {
							streamClient = my.streamClients[id];
							streamClient.config.set("liveUpdates", true);
							streamClient.refresh();
							e.removeClass(disabledClass);
						}
					});
				}, 1000);
			})(jQuery);
			
			//
			EchoTools._echoFactoryCreated = true;
		}
		else {
			throw new Exception('EchoTools.Factory should be used as a singleton. Call EchoTools.Factory.getInstance()');
		}
	},
	Markers : function() {},
	Post : function() {},
	Query : function() {},
	Tags : function() {},
	Users : function() {},
	Analytics : function() {},
	Loader: function() {}
};


/**
 ***************************************************************************
 *
 * Prototypes for interactig with backplane urls
 *
 ***************************************************************************
 */
EchoTools.Backplane.prototype = {
	
	/**
	 * @return the requestorURL
	 */
	getRequestorURL : function() {
		var url;
		(function($) {
			url = $.cookie('www_backplane_user_url');		
		})(jQuery);
		return url;
	},
	
	/**
	 * @return true, if the user has requestor url
	 */
	hasRequestorURL : function() {
		return (this.getRequestorURL()) ? true : false;
	}
	
}



/**
 ***************************************************************************
 *
 * A generic tools for Building EQL on the site.
 *
 ***************************************************************************
 */
EchoTools.EQL.prototype = {
	
	

	
	/**
	 * @return the requestorURL
	 */
	my : function() {
		var url;
		(function($) {
			url = $.cookie('www_backplane_user_url');		
		})(jQuery);
		return url;
	},
	
	
	/**
	 * Creates Query for comment thread from queryBase.
	 * @param queryBase, base of query for echo, such as "childrenof:http://foo.com" or "scope://http://foo.com/*"
	 */
	createCommentThreadQuery : function(queryBase, sortOrder, user) {

		// create tye basic query with comment properties
		return queryBase 
			+ (sortOrder!=null ? ' sortOrder:' + sortOrder : '')
			+ ' type:comment'
			+ ' -source:Twitter'
			+ this.sanitizer(user)
			+ ' safeHTML:aggressive'
			+ ' children:1 childrenItemsPerPage:6' 
				+ this.sanitizer(user)
				+'  safeHTML:aggressive';

	},
	
	
	

	/**
	 * Creates Query for standard river thread
	 * @param queryBase, base of query for echo, such as "childrenof:http://foo.com" or "scope://http://foo.com/*"
	 */
	createRiverThreadQuery : function(queryBase, user) {
		// create tye basic query with comment properties
		return queryBase 
				+ this.sanitizer(user)
				+ ' type:note,article,comment,service'
				+ ' after:"3 months ago"'
				+ ' safeHTML:aggressive'
				+ ' -source:Twitter'
				+ ' children:0';
	},


	/**
	 * Creates Query for standard user feed thread
	 * @param queryBase, base of query for echo, such as "childrenof:http://foo.com" or "scope://http://foo.com/*"
	 */
	createUserFeedThreadQuery : function(queryBase, userNames, sortOrder, user) {

		var userNameBase = '';
		var userMarkers = '';
		var c = 0;
		for(var i in userNames) {
			if(c++ != 0) {
				userNameBase += ' OR';
				userMarkers += ',';
			}
			userNameBase += " user.id:" + userNames[i].replace("'", "\\'") + "";
			userMarkers += "'like_convo:" + userNames[i].replace("'", "\\'") + "','comment:" + userNames[i].replace("'", "\\'") + "'";
		}
		return queryBase
				+ ' -markers:reply'
				+ ' ((' + userNameBase + ') OR (markers:' + userMarkers + '))'
				+ this.sanitizer(user)
				+ ' safeHTML:aggressive'
				+ ' after:"13 weeks ago"'
				+ (sortOrder!=null ? ' sortOrder:' + sortOrder : '')
				+ ' children:1 childrenItemsPerPage:6' 
					+ this.sanitizer(user)
					+ ' safeHTML:aggressive';
	},



	/**
	 * Creates Query for comment thread from queryBase.
	 * @param queryBase, base of query for echo, such as "childrenof:http://foo.com" or "scope://http://foo.com/*".
	 * @param filtertag tag to be used for filter, if it doesn't exist, there will be no filter.
	 */
	createTalkStreamQuery : function(queryBase, markerfilter, sortOrder, user) {
		// create tye basic query with comment properties
		return queryBase 
			+ (sortOrder!=null ? ' sortOrder:' + sortOrder : '')
			+ ' type:service'
			+ ((markerfilter != null && markerfilter.length > 0) ?  ' ' + markerfilter : '')
			+ ' -source:Twitter'
			+ this.sanitizer(user)
			+ ' safeHTML:aggressive'
			+ ' children:0';
			+ ' itemsPerPage:10'
	},
	
	
	/**
	 * Creates Query for standard user feed counter
	 * @param queryBase, base of query for echo, such as "childrenof:http://foo.com" or "scope://http://foo.com/*"
	 */
	createUserFeedCounterQuery : function(queryBase, userNames, user) {
		var userNameBase = '';
		var userMarkers = '';
		var c = 0;
		for(var i in userNames) {
			if(c++ != 0) {
				userNameBase += ' OR';
				userMarkers += ',';
			}
			userNameBase += " user.id:" + userNames[i].replace("'", "\\'") + "";
			userMarkers += "'like:" + userNames[i].replace("'", "\\'") + "'";
		}
		return queryBase
				+ ' -markers:reply'
				+ ' ((' + userNameBase + ') OR (markers:' + userMarkers + '))'
				+ this.sanitizer(user)
				+ ' after:"13 weeks ago"'
				+ ' children:0';
	},





	
	/**
	 * Creates the sanitizer based on the user status.
	 */
	sanitizer : function(user) {
		//
		if(new EchoTools.Users().isQuarantined(user))
			return ' (-(user.state:ModeratorBanned OR state:ModeratorDeleted,SystemFlagged,CommunityFlagged) OR (user.id:' + user.data.id + ' -state:ModeratorDeleted,SystemFlagged,CommunityFlagged))';
		return ' -(user.state:ModeratorBanned OR state:ModeratorDeleted,SystemFlagged,CommunityFlagged)';
	}

	
}

/** 
 ***************************************************************************
 *
 * Prototype for creating standard Echo components for the AMC Network
 * sites. Factory class, while is a instantiable class, should be accessed
 * as a singleton with EchoTools.Factory.getInstance() method.
 *
 ***************************************************************************
 */
EchoTools.Factory._mySingletonFactory = null;
EchoTools.Factory.getInstance = function() {
	if(!EchoTools.Factory._mySingletonFactory) {
		EchoTools.Factory._mySingletonFactory = new EchoTools.Factory();
	}
	return EchoTools.Factory._mySingletonFactory;
}
EchoTools.Factory.prototype = {
	
	// 
	appKey : 'prod.amctv.com',
	liveUpdatesTimeout : 15,

	// Array of clients created
	submitClients : {},
	streamClients : {},
	counterClients : {},

	// array of callback actions to be carried out after broadcast events
	streamReadyCallback: [],
	streamOnRenderCallback: [],
	streamOnRerenderCallback: [],
	
	createSubmitClients : function(user) {
		var my = this;
		(function($){
			$('.echo2-submit').each( function() {

				// submit client
				var submit = new Echo.Submit({
				    	"target": this,
				    	"appkey": my.appKey,
				    	"targetURL":  my.getEchoMetaNonArray(this, 'permalink'),
				    	"actionString": "Write a Comment",
				    	"plugins": [{"name":"FormAuth","submitPermissions":"forceLogin"},{"name":"SubmitClientRenderer"}],
						"tags" : my.getEchoMetaParameters(this, '.tag'),
						"markers" : my.getEchoMetaParameters(this, '.marker', new Array('ipaddress:' + mySessionInfo.ipaddress))
				});

				// marks client as initalized and registering as an element
				my.submitClients = my.registerClient(submit, this, 'submit', my.submitClients);
			});
		})(jQuery);
	},
	createStreamClients : function(user) {
		var my = this;
		(function($){
		  	// Echo2 Stream Client Invocations for Comment Thread
		  	$('.echo2-stream').appear(function(){

				// Stream Plugins;
		  		var plugins = [{"name":"Like"},{"name":"StreamEntryUserModifier"},{"name":"ItemContentNormalizer","spoilerHideCount":3},{"name":"CommunityFlag"},{"name":"Curation"},{"name":"UserBan"},{"name":"UserPrivileges"},{"name":"UserQuarantine"},{"name":"StreamInteractMenu"},{"name":"ItemSocialDescriptor"}];
		
				// add reply plugin
				plugins[plugins.length] = {
					"name": "Reply",
					"actionString": "Reply here.",
					"nestedPlugins": [{"name":"FormAuth","submitPermissions":"forceLogin"},{"name":"SubmitClientRenderer"}],
					"tags" : my.getEchoMetaParameters(this, '.tag'),
					"markers" : my.getEchoMetaParameters(this, '.marker', new Array('ipaddress:' + mySessionInfo.ipaddress, 'reply'))
				};	  			
				
				var stream = new Echo.Stream({
					"target": this,
					"appkey": my.appKey,
					"AdminMode": true,
					"reTag" : false,
					"query": my.makeEchoCommentQuery(this, user, false),
					"plugins": plugins,
	                "flashColor": "#333333",
	                "fadeTimeout": 200,
					"children": { "additionalItemsPerPage": 10 }
				});

				// mark client as initialized and register as eleemnt
				my.streamClients = my.registerClient(stream, this, 'stream', my.streamClients);
		  	});
		})(jQuery);
	},
	createStreamCounter : function(user) {
		var my = this;
		(function($) {

			// setup so that this only renders on appear
			$('.echo2-comment-counter:not(.initialized)').each(function(){
				$(this).append('-');
			});
			$('.echo2-comment-counter:not(.initialized)').appear(function(){
				var q = my.makeEchoCommentQuery(this, user, false);
				if(q && q.length > 0) {
					var counter = new Echo.Counter({
						"target"  : this,
						"appkey"  : my.appKey,
						"query"   : my.makeEchoCommentQuery(this, user, false),
						"liveUpdatesTimeout" : my.liveUpdatesTimeout * 4 // reduce the query rate for counter
					});
					my.counterClients = my.registerClient(counter, this, 'counter', my.counterClients);
				}
			});
		})(jQuery);
	},
	createRiver : function(user) {
		var my = this;
		(function($){
		  	$('.echo2-river').appear(function(){

				// Generate Query. If QueryBase exists, this is NEW version of the script.
				// If not, just look for query, which is the older version of the script.
				var queryBase = my.getEchoMetaNonArray(this, 'queryBase');
				if(queryBase) 
					query = new EchoTools.EQL().createRiverThreadQuery(queryBase, user);
				else
					query = my.getEchoMetaNonArray(this, 'query');

				var stream = new Echo.Stream({
					"target": this,
					"appkey": my.appKey,
					"query": query,
					"streamStateLabel": { "icon": false, "text": false },
					"maxReTitleLength": 60,
					"maxBodyCharacters": 140,
					"plugins": [{"name":"ItemContentNormalizer"},{"name":"StreamEntryUserModifier","avatarWidth":24}],
					"flashColor": "#333333",
					"fadeTimeout": 200
				});

				my.streamClients = my.registerClient(stream, this, 'stream', my.streamClients);
		  	});
		})(jQuery);
	},
	createStreamSorter : function(user) {
		var my = this;
		(function($){			
			// for sorting comment thread
		  	$(".echo2-stream-sorter .sort-tab").click(function(){
				// change focus
		      	$(".echo2-stream-sorter .sort-tab").removeClass('focus');
		      	$(this).addClass('focus');
			
		  		var streamClient = my.streamClients[my.getEchoMetaNonArray(this, 'target')];
		  		streamClient.config.set("query", my.makeEchoCommentQuery(this, user, false));

				// update client settings for non-reverseChronological sort. This is to avoid
		      	// user having comment refreshed again while adding new comment
		      	streamClient.config.set("liveUpdatesTimeout", my.liveUpdatesTimeout );
		      	streamClient.refresh();
		  	});
		})(jQuery);
	},
	createUserFeed: function(user) {
		var my = this;
		(function($){
		  	$('.echo2-userfeed').appear(function(){
			
				// add stream plugins
				var plugins = [{"name":"Like"},{"name":"StreamEntryUserModifier"},{"name":"ItemContentNormalizer","spoilerHideCount":3},{"name":"CommunityFlag"},{"name":"Curation"},{"name":"UserBan"},{"name":"UserPrivileges"},{"name":"UserQuarantine"},{"name":"StreamInteractMenu"},{"name":"ItemSocialDescriptor"}];
				
				// add reply plugin
				plugins[plugins.length] = {
					"name": "Reply",
					"actionString": "Reply here.",
					"nestedPlugins": [{"name":"FormAuth","submitPermissions":"forceLogin"},{"name":"SubmitClientRenderer"}],
					"tags" : my.getEchoMetaParameters(this, '.tag'),
					"markers" : my.getEchoMetaParameters(this, '.marker', new Array('ipaddress:' + mySessionInfo.ipaddress, 'reply'))
				};		
				var stream = new Echo.Stream({
					"target": this,
					"appkey": my.appKey,
					"AdminMode": true,
					"query": my.makeEchoUserFeedQuery(this, user, false),
					"plugins": plugins,
					"flashColor": "#333333",
					"fadeTimeout": 200,
					"children": { "additionalItemsPerPage": 10 }
				});        		

				my.streamClients = my.registerClient(stream, this, 'stream', my.streamClients);
		  	});
		})(jQuery);
	},

	createTalkStream: function(user) {

		var my = this;
		(function($){
			EchoTools.Loader.loadPlugins(['TalkEntry','Edit'], function() {
		  		$('.echo2-talkstream:not(.init)').appear(function(){
					var that = this;
					try {

						// add stream plugins
						var plugins = [{
							"name": "TalkEntry",
							"enableSocialButtons": $(this).find('.echo2-meta').data('enablesocialbuttons')
						}];


						// add reply plugin
						if(user.data.roles.administrator || user.data.roles.moderator) {
							plugins = plugins.concat([
								{"name": "Edit"},
								{"name": "UserBan"},
								{"name": "UserQuarantine"},
								{
									"name": "MetadataManager",
									"controls": [{ 
										"marker": "featured",
										"labelMark": "feature",
										"labelUnmark": "unfeature"
									}]
								},
								{"name":"Curation"}
							]);
						}

						// generate stream
						var talkstream = new Echo.Stream({
							"target": that,
							"appkey": my.appKey,
							"AdminMode": true,
							"query": my.makeEchoTalkStreamQuery(that, user, false),
							"plugins": plugins,
							"flashColor": "#333333",
							"fadeTimeout": 200,
							"reTag": false,
							"children": { "additionalItemsPerPage": 10 },
							"streamStateLabel": { "icon": false, "text": false },
							"liveUpdates": $(this).find('.echo2-meta').data('liveupdates') !== 'false'
						});

						my.streamClients = my.registerClient(talkstream, this, 'stream', my.streamClients);
					}
					catch(t) {
						console.log(t);
					}
				});
			});
		})(jQuery);
	},


	createUserFeedCounter : function(user) {
		var my = this;
		(function($) {
			$('.echo2-userfeed-counter:not(.initialized)').each(function(){
				var counter = new Echo.Counter({
					"target"  : this,
					"appkey"  : my.appKey,
					"query"   : my.makeEchoUserFeedQuery(this, user, true),
					"liveUpdatesTimeout" : my.liveUpdatesTimeout
				});
				my.counterClients = my.registerClient(counter, this, 'counter', my.counterClients);
			});
		})(jQuery);
	},
	createUserFeedSorter : function(user) {

		var my = this;
		(function($){
			$(".echo2-userfeed-sorter .sort-tab").live('click', function(){
				// change focus
		      	$(".echo2-userfeed-sorter .sort-tab").removeClass('focus');
		      	$(this).addClass('focus');

				// refresh stream
		  		var streamClient = my.streamClients[my.getEchoMetaNonArray(this, 'target')];
		  		streamClient.config.set("query", my.makeEchoUserFeedQuery(this, user, false));
		      	streamClient.config.set("liveUpdatesTimeout", my.liveUpdatesTimeout );
		      	streamClient.refresh();	
		  	});
		})(jQuery);
	},

	
	/**
	 * Method Used to Register Clients so it can be used from external method in the future.
	 */
	registerClient : function(echoObj, client, idPrefix, clientObject) {
		var my = this;
		(function($) {
			$(client).addClass('initialized');
			var id = $(client).attr('id') != null ? $(client).attr('id') : (idPrefix + '-' + md5(my.randomString()));
			$(client).attr('id', id);
 			clientObject[id] = echoObj;
		})(jQuery);
		return clientObject;
	},
	
	
	getEchoMetaParameters : function(e, selector, extras) {
		var array = new Array();
		(function($){
			// retrieve tags
			$(e).find(selector).each(function(){
				array[array.length] = $(this).data('val') == null ? $.trim($(this).text()) : $.trim($(this).data('val'));
			});			
			if(extras != null) {
				for(var i=0; i<extras.length; i++)
					array[array.length] = extras[i];
			}
		})(jQuery);
		return array;
	},
	
	
	makeEchoUserFeedQuery : function(e, user, isCounter) {
		var my = this;
		var query = '';
		(function($){
			// Generate Query. If QueryBase exists, this is NEW version of the script.
			// If not, just look for query, which is the older version of the script.
			var queryBase = my.getEchoMetaNonArray(e, 'queryBase'); 
			if(queryBase) {
				if(isCounter) {
					query = new EchoTools.EQL().createUserFeedCounterQuery(
								queryBase, 
								my.getEchoMetaParameters(e,'.userName'),
								user
							);	
				}
				else {
					var sortOrder = my.getEchoMetaNonArray(e, 'sortOrder');
					sortOrder = (sortOrder.length != 0) ? sortOrder : 'reverseChronological';
					query = new EchoTools.EQL().createUserFeedThreadQuery(
								queryBase, 
								my.getEchoMetaParameters(e,'.userName'), 
								sortOrder,
								user
							);
				}
			}
			else
				query = my.getEchoMetaNonArray(e, 'query');
		})(jQuery);
		return query;
	},
	

	
	makeEchoTalkStreamQuery : function(e, user, isCounter) {
		var query = '';
		var my = this;
		(function($){

			var queryBase = my.getEchoMetaNonArray(e, 'queryBase');
			var markerfilter = my.getEchoMetaNonArray(e, 'markerfilter');
			var sortOrder = 'reverseChronological';
			query = new EchoTools.EQL().createTalkStreamQuery(queryBase, markerfilter, sortOrder, user);

		})(jQuery);
		return query;
	},
	
	
	makeEchoCommentQuery : function(e, user, isCounter) {
		var query = '';
		var my = this;
		(function($){
			// Generate Query. If QueryBase exists, this is NEW version of the script.
			// If not, just look for query, which is the older version of the script.
			var queryBase = my.getEchoMetaNonArray(e, 'queryBase');
			if(queryBase) {
				// ifCounter is not used right now
				var sortOrder = my.getEchoMetaNonArray(e, 'sortOrder');
				sortOrder = (sortOrder.length != 0) ? sortOrder : 'reverseChronological';
				query = new EchoTools.EQL().createCommentThreadQuery(queryBase, sortOrder, user);
			}
			else 
				query = my.getEchoMetaNonArray(e, 'query');

		})(jQuery);
		return query;
	},


	/**
	 * Simplifies Fetching of the Meta Data.
	 */
	getEchoMetaNonArray : function(e, metaName) {
		var my = this;
		var val;
		(function($) {
			val = $(e).find('.echo2-meta').data(metaName.toLowerCase());
			val = (val == null) ? $.trim($(e).find('.' + metaName).text()) : val;
		})(jQuery);
		return val;
	},

	randomString : function() {
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 16;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		return randomstring;
	}

	
}

/** 
 ***************************************************************************
 *
 * Prototype for interacting with Markers. These methods are asyncronous.
 *
 ***************************************************************************
 */
EchoTools.Markers.prototype = {
	
	
	/**
	 * Adds given aray of markers to the targetted object and excecutes the callback.
	 */
	add : function(target_id, markers, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/markers.add?callback=?",
				{ 'target_id': target_id, 'markers': markers },
				callback
			);
		})(jQuery);
	},


	/**
	 * Adds given aray of markers to the targetted object and excecutes the callback.
	 */
	add_debug : function(target_id, markers, type, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/markers.add?callback=?",
				{ 'target_id': target_id, 'markers': markers, 'type': type },
				callback
			);
		})(jQuery);
	},	

	
	/**
	 * Removes given aray of markers from targetted object and excecutes the callback.
	 */
	remove : function(target_id, markers, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/markers.remove?callback=?",
				{ 'target_id' : target_id, 'markers' : markers },
				callback
			);
		})(jQuery);
	},
	
	
	
	/**
	 * Simplifies the call to follow object
	 */
	followObject : function(target_id, callback) {
		this.add( target_id, [ 'followedBy:' + new EchoTools.Backplane().getRequestorURL() ], callback );
	},
	
	/**
	 * Simplifies teh call to unfollow the object.
	 */
	unfollowObject : function(target_id, callback) {
		this.remove( target_id, [ 'followedBy:' + new EchoTools.Backplane().getRequestorURL() ], callback );
	}
	
	
	
	
}


/*
 ***************************************************************************
 * 
 * Prototypes for echo post/update activity verbs
 *
 ***************************************************************************
 */
EchoTools.Post.prototype = {

	/**
	 * Add the post with information in the params. Params should be an object. Will return data 
	 * related to the post, including the new entry_id of the element.
	 *
	 * Params are as follows:
	 * target_id - Target Id, entry id of the element that will be the parent element of the post.
	 * entry_type - 'article', 'note', etc. New entry's entry type'.
	 * title - Title of the post.
	 * content - content of the post.
	 */
	add : function(params, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/post.add?callback=?",
				params,
				function(json) {
					if(callback!=null)
						callback(json);
				}
			);
		})(jQuery);
	},
	
	/**
	 * Updates the given entry with entry_id specified.
	 *
	 * Params are as follows:
	 * entry_id - required - entry id of the element to be updated.
	 * target_id - Target Id, entry id of the element that will be the parent element of the post.
	 * entry_type - required - 'article', 'note', etc. New entry's entry type'.
	 * title - required - Title of the post.
	 * content - content of the post.
	 */
	update : function(params, callback) {
		var my = this;
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/post.update?callback=?",
				params,
				function(json) {
					if(callback!=null)
						callback(json);
				}
			);
		})(jQuery);
	}
	
}


/*
 ***************************************************************************
 *
 * Prototypes for Methods that are often used across echo platform.
 *
 *************************************************************************** 
 */
EchoTools.Query.prototype = {
	
	/**
	 * Makes an asynchronous call to check if last entry posted by request was flagged 
	 * in the post defined by target_id. Callback has 2 return parameters. Boolean
	 * indicating if the post was flagged, and json data entry related to the post.
	 *
	 * This is a simplified wrapper for EchoTools.Query.lastEntry method.
	 */
	lastEntryFlagged : function(target_id, requestor_url, callback) {
		var my = this;
		(function($){
			my.lastEntry(target_id, requestor_url, function(json){
				
				// Check if the newest post made by the usr was flagged or not.
				// If flagged, just skip over tagging actions and pop up a warning.
				if(json.entries && json.entries.length > 0) {
					
					// if this was flagged by system, skip over.
					var entry = json.entries[0];
					if(entry.object.status && entry.object.status == 'SystemFlagged') {
						if(callback!=null)
							callback(true, json);
					}
					else {
						if(callback!=null)
							callback(false, json);
					}
				}
				else {
					if(callback!=null)
						callback(false, json);
				}
			});
		})(jQuery);
	},
	
	/**
	 * Makes an asynchronous call to retrieve the last entry by requestor_id
	 * in the post defined by target_id. Callback has a single return parameter,
	 * json data entry.
	 */
	lastEntry : function(target_id, requestor_url, callback) {
		this.lastEntries(target_id, requestor_url, 1, callback);
	},
	
	/**
	 * Makes an asynchronous call to retrieve the lastentries of specified
	 * quantity by user with requestor_id in the post defined by target_id. 
	 * Callback has a single return parameter, json data entry.
	 */
	lastEntries : function(target_id, requestor_url, size, callback) {
		(function($){
			$.getJSON('http://api.echoenabled.com/v1/search?callback=?', {
				'q' : 'childrenof:' + target_id + '* user.id:' + requestor_url + ' itemsPerPage:' + size,
				'appkey' : appKey 
			}, function(json) {
				if(callback!=null)
					callback(json);
			});
		})(jQuery);
	}
}







/*
 ***************************************************************************
 *
 * Prototype for interacting with Tags. These methods are asyncronous.
 *
 ***************************************************************************
 */
EchoTools.Tags.prototype = {
	
	/**
	 * Adds Tags from the post with given target_id.
	 */
	add : function(target_id, tags, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/tags.add?callback=?",
				{ 'target_id' : target_id, 'tags' : tags },
				callback
			);
		})(jQuery);
	},
	
	/**
	 * Removes Tags from the post with given target_id.
	 */
	remove : function(target_id, tags, callback) {
		(function($) {
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/tags.remove?callback=?",
				{ 'target_id' : target_id, 'tags' : tags },
				callback
			);
		})(jQuery);
	}
	
}








/*
 ***************************************************************************
 *
 * Prototype for interacting with Users. These methods are asyncronous.
 *
 ***************************************************************************
 */
EchoTools.Users.prototype = {
	
	/**
	 * Adds follow related tags to users that follows and being followed.
	 */
	follow : function(identityURL, callback) {
		(function($){
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/users.follow?callback=?",
				{ 'identityURL' : identityURL },
				callback
			);
		})(jQuery);
	},
	
	/**
	 * Removes follow related tags to users that was following and was being followed.
	 */
	unfollow : function(identityURL, callbcak) {
		(function($){
			$.getJSON(
				"http:\/\/www.amctv.com\/users\/social\/echo\/api\/users.unfollow?callback=?",
				{ 'identityURL' : identityURL },
				callback
			);
		})(jQuery);
	},
	
	/**
	 * Return true if the user was quarantined. Returns false if not.
	 */
	isQuarantined : function(user)  {
		if(user.data.echo.markers != undefined) 
			for(var i in user.data.echo.markers) {
				if(user.data.echo.markers[i] == "ModeratorQuarantined")
					return true;
			}
		return  false;
	},
	
	
	/**
	 * Return 
	 */
	getProfileURL : function(user) {
		var id = user.id.replace(/http:.*?amctv.com/, "http://www.amctv.com");
		var slug = this.slugify(typeof user.title != 'undefined' ? user.title : "");
		return id + slug;
	},
	
	
	slugify : function(text) {
		text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
		text = text.replace(/-/gi, "_");
		text = text.replace(/\s/gi, "-");
		text = text.toLowerCase();
		return text;
	}
}

/*
 ***************************************************************************
 *
 * Convenience Methods for Analytics
 *
 ***************************************************************************
 */
EchoTools.Analytics.prototype = {
	
	getStreamClientEventAction : function(data) {
		var value = "unknown";
		(function($){
			if($(data.target).parents('.echo2-stream-root').length > 0) {
				value = $(data.target).parents('.echo2-stream-root').data('echo2-type');
			}
			else if($(data.target).hasClass('echo2-stream-root')) {
				value = $(data.target).data('echo2-type');
			}
			else if($(data.target).hasClass('echo2-river')) {
				value = 'echo2-river';
			}
			else if($(data.target).hasClass('echo2-stream')) {
				value = 'echo2-stream';
			}
			else if($(data.target).hasClass('echo2-userfeed')) {
				value = 'echo2-userfeed';
			}
			else if($(data.target).hasClass('echo2-talkstream')) {
				value = 'echo2-talkstream';
			}
		})(jQuery)
		return value;
	},
	parseCSV : function(s,sep) {
	    // http://stackoverflow.com/questions/1155678/javascript-string-newline-character
	    var universalNewline = /\r\n|\r|\n/g;
	    var a = s.split(universalNewline);
	    for(var i in a){
	        for (var f = a[i].split(sep = sep || ","), x = f.length - 1, tl; x >= 0; x--) {
	            if (f[x].replace(/"\s+$/, '"').charAt(f[x].length - 1) == '"') {
	                if ((tl = f[x].replace(/^\s+"/, '"')).length > 1 && tl.charAt(0) == '"') {
	                    f[x] = f[x].replace(/^\s*"|"\s*$/g, '').replace(/""/g, '"');
	                  } else if (x) {
	                f.splice(x - 1, 2, [f[x - 1], f[x]].join(sep));
	              } else f = f.shift().split(sep).concat(f);
	            } else f[x].replace(/""/g, '"');
	          } a[i] = f;
		}
		return a;
	},
	getSubmitPostType : function(data) { 
		var type = 'stem';
		var array = this.parseCSV(data.postData.markers, ',');
		(function($) {
			try {
				$.each(array[0], function(i,v){
					if($.trim(v) == 'reply') {
						type = 'reply';
						return false;
					}
				});
			}
			catch(t) {
				console_log(t);
			}
		})(jQuery);
		return type;
	},
	/**
	 * For Retrieving Google Analytics Event Action Type
	 */
	getStreamItemAction : function(e) {
		var value = 'unknown';
		(function($) {
			if($(e).parents('.echo2-stream-root').length > 0) {
				value = $(e).parents('.echo2-stream-root').data('echo2-type');
			}
			else if($(e).hasClass('echo2-stream-root')) {
				value = $(e).data('echo2-type');
			}
			else if($(e).parents('.echo2-river').length > 0 || $(e).hasClass('echo2-river')) {
				value = 'echo2-river';
			}
			else if($(e).parents('.echo2-stream').length > 0 || $(e).hasClass('echo2-stream')) {
				value = 'echo2-stream';
			}
			else if($(e).parents('.echo2-userfeed').length > 0 || $(e).hasClass('echo2-userfeed')) {
				value = 'echo2-userfeed';
			}

		})(jQuery);
		return value;
	}
}

EchoTools.Loader.plugins = {"TalkEntry":"http:\/\/www.amctv.com\/users\/social\/echo\/js\/plugin.stream.talkentry.js?ver=1.0a","Edit":"http:\/\/cdn.echoenabled.com\/clientapps\/v2\/plugins\/edit.js"};
EchoTools.Loader.loadPlugins = function(plugins, callback) {
	(function($) {
		if(plugins.length > 0) {
			var url = EchoTools.Loader.plugins[plugins[0]];
			if($('script[src="' + url + '"]').length === 0) {
				$.ajax({
					dataType: "script",
					cache: true,
					url: url,
					success: function() {
						EchoTools.Loader.loadPlugins(plugins.slice(1), callback);
					}	
				});
			}
			else {
				$('script[src="' + url + '"]').load(function(){
					EchoTools.Loader.loadPlugins(plugins.slice(1), callback);
				});
			}
		}
		else {
			callback();
		}
	})(jQuery);
}
