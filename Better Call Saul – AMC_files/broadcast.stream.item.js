/*
 ************************************************************
 *
 * Echo Broadcast Listeners 
 * 
 * The event handling for the Items from Stream Client 
 * should be added here, if required.
 *
 * @author Yoshitaka Ito
 *
 ************************************************************
 */
;(function($){
	
	var analyticsTool = new EchoTools.Analytics();
	

	Echo.Broadcast.subscribe("Stream.onReady", function(topic, data, contextId) {
		var actions = EchoTools.Factory.getInstance().streamReadyCallback;
		for(var k in actions) {
			actions[k](topic, data, contextId);
		}
	});

	Echo.Broadcast.subscribe("Stream.onRender", function(topic, data, contextId) {
		var actions = EchoTools.Factory.getInstance().streamOnRenderCallback;
		for(var k in actions)
			actions[k](topic, data, contextId);
	});
	Echo.Broadcast.subscribe("Stream.onRerender", function(topic, data, contextId) {
		var action = analyticsTool.getStreamClientEventAction(data);
		if(action == 'echo2-stream') {				
			var sort = $(".echo2-stream-sorter .focus").clone().children().remove().end().text().trim();
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.onRerender',
				'label': action + ":" + sort
			}));
		}
		else if(action == 'echo2-userfeed') {
			var sort = $(".echo2-userfeed-sorter .focus").clone().children().remove().end().text().trim();
			_ca.trackEvent({
				'action': 'Echo.Stream.onRerender',
				'label': action + ":" + sort
			});
		}
		else {
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.onRerender',
				'label': action + ":unknown"
			}));			
		}
		var actions = EchoTools.Factory.getInstance().streamOnRerenderCallback;
		for(var k in actions)
			actions[k](topic, data, contextId);	
	});
	Echo.Broadcast.subscribe("Stream.onMoreButtonPress", function(topic, data, contextId) {
		var action = analyticsTool.getStreamClientEventAction(data);
			if(action == 'echo2-stream') {				
			var sort = $(".echo2-stream-sorter .focus").clone().children().remove().end().text().trim();
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.onMoreButtonPress',
				'label': action + ":" + sort
			}));
		}
		else if(action == 'echo2-userfeed') {
			var sort = $(".echo2-userfeed-sorter .focus").clone().children().remove().end().text().trim();
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.onMoreButtonPress',
				'label': action + ":" + sort
			}));
		}
		else if(action == 'echo2-talkstream') {
			window._pageIndex = typeof window._pageIndex !== 'undefined' ? window._pageIndex : 2;
			_ca.trackEvent({
				'action': 'click_more',
				'label': _pageIndex,
				'url': document.URL + "#" + window._pageIndex++
			});
		}
		else {
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.onMoreButtonPress',
				'label': action + ":unknown"
			}));
		}
	});
	
	
	
	// this is for adjusting isQuarantine
	Echo.Broadcast.subscribe("Stream.Item.onRender", function(topic, data, contextId) {

		// check if the submit client should be disabled.
		var user = new Echo.User({"appkey": "prod.amctv.com" });
		user.init( function() {
			if(this.state == 'ModeratorBanned'  && !(new EchoTools.Users().isQuarantined(user))) {
				$(".echo-item-controls").html('');
				$(".echo-item-replyForm").remove('');
			}

			if(user.logged()) {
			
				// marking element with md5 if this happened beyond diff = 10 mins
				// or if this is the poster
				var time_now = new Date();
				var time_posted = new Date(Date.parse(data.item.data.postedTime));

				// break off if values defined here are null somehow
				if(typeof time_posted === 'undefined' || time_posted === null)
					return;

				if( time_now - time_posted > 600000 && time_now - time_posted < (1000*60*60*24*365*10)) {
					var _debug = "("+time_now.toUTCString()+","+time_posted.toUTCString()+")";
					var t = new EchoTools.Markers();
					if(typeof(data.item.data.object.markers) != 'undefined' 
							&& typeof(data.item.data.object.markers) == 'object' 
							&& (data.item.data.object.markers instanceof Array)) {
						var has_md5 = false;
						$.each(data.item.data.object.markers, function(i, v){
							if(v.indexOf('md5:') === 0) {
								has_md5 = true;
								return false;
							}
						});
						if(!has_md5) {
							t.add_debug(
								data.item.data.object.id, 
								['md5:' + md5(data.item.data.object.id) ],
								"Stream.Item.onRender.noMD5Markers:" + _debug
							);
							if(window.console) {
								console.log('md5 added, missing md5, other');
								console.log('posted, now, diff', time_posted, time_now, (time_now - time_posted));
								console.log('data.item.data.actor.id, user.data.id',  data.item.data.actor.id, user.data.id);
							}
						}
					}
					else {
						t.add_debug(
							data.item.data.object.id, 
							['md5:' + md5(data.item.data.object.id) ], 
							"Stream.Item.onRender.emptyMarkers:" + _debug
						);
						if(window.console) {
							console.log('md5 added, no markers');	
						}
					}

				}

			}


		});

		$(data.item.target).find('a.echo-authname-link').on('click', function(e){
			_trackEchoHrefClicks('Echo.Stream.Item._onHrefClick.authorName', this);
			e.preventDefault();
		});
		$(data.item.target).find('.echo-item-re a').on('click', function(e){
			_trackEchoHrefClicks('Echo.Stream.Item._onHrefClick.reItem', this);
			e.preventDefault();
		});
		$(data.item.target).find('.echo-item-body .echo-item-text a').on('click', function(e){
			_trackEchoHrefClicks('Echo.Stream.Item._onHrefClick.bodyLink', this);
			e.preventDefault();
		});

	});
	
	/*
	 *
	 * Marking Things on Like Actions.
	 *
	 */
	Echo.Broadcast.subscribe("Stream.Plugins.Like.onLikeComplete", function(topic, data, contextId) {
		// Check if backplane_id exists and its a valid user
		var bp = new EchoTools.Backplane();
		if(bp.hasRequestorURL()) {
			var t = new EchoTools.Markers();
			t.add(data.item.data.object.id, ['like:' + bp.getRequestorURL() ]);
			t.add(data.item.data.target.conversationID, ['like_convo:' + bp.getRequestorURL(), 'like_conve_itemid:' + data.item.data.object.id ]);
			
			var action = analyticsTool.getStreamItemAction(data.target);
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.Plugins.Like.onLikeComplete.conversation',
				'label': action,
				'echo_item_id': data.item.data.target.conversationID
			}));
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.Plugins.Like.onLikeComplete.item',
				'label': action,
				'echo_item_id': data.item.data.object.id
			}));
		}
	});
	Echo.Broadcast.subscribe("Stream.Plugins.Like.onUnlikeComplete", function(topic, data, contextId) {
		// Check if backplane_id exists and its a valid user
		var bp = new EchoTools.Backplane();
		if(bp.hasRequestorURL()) {
			var t = new EchoTools.Markers();
			t.remove(data.item.data.object.id, ['like:' + bp.getRequestorURL() ]);
			t.remove(data.item.data.target.conversationID, ['like_convo:' + bp.getRequestorURL(), 'like_conve_itemid:' + data.item.data.object.id ]);
			
			var action = analyticsTool.getStreamItemAction(data.target);
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.Plugins.Like.onUnlikeComplete.conversation',
				'label': action,
				'echo_item_id': data.item.data.target.conversationID
			}));
			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': 'Echo.Stream.Plugins.Like.onUnlikeComplete.item',
				'label': action,
				'echo_item_id': data.item.data.object.id
			}));
		}
	});
	
	/*
	 *
	 * Marking Things on Flag Actions.
	 *
	 */
	Echo.Broadcast.subscribe("Stream.Plugins.CommunityFlag.onFlagComplete", function(topic, data, contextId) {
		var action = analyticsTool.getStreamItemAction(data.target);
		_ca.trackEvent($.extend(_ca._defaultValues, {
			'action': 'Echo.Stream.Plugins.CommunityFlag.onFlagComplete',
			'label': action,
			'echo_item_id': data.item.data.target.conversationID
		}));
	});
	Echo.Broadcast.subscribe("Stream.Plugins.CommunityFlag.onUnflagComplete", function(topic, data, contextId) {
		var action = analyticsTool.getStreamItemAction(data.target);
		_ca.trackEvent($.extend(_ca._defaultValues, {
			'action': 'Echo.Stream.Plugins.CommunityFlag.onUnflagComplete',
			'label': action,
			'echo_item_id': data.item.data.target.conversationID
		}));	
	});
	
	/*
	 *
	 * Unmarking Things on Like Actions.
	 *
	 */
	Echo.Broadcast.subscribe("Stream.Plugins.Like.onUnlikeComplete", function(topic, data, contextId) {
		// Check if backplane_id exists and its a valid user
		var bp = new EchoTools.Backplane();
		if(bp.hasRequestorURL()) {
			var t = new EchoTools.Markers();
			t.remove(data.item.data.object.id, ['like:' + bp.getRequestorURL() ]);
			t.remove(data.item.data.target.conversationID, ['like_convo:' + bp.getRequestorURL(), 'like_conve_itemid:' + data.item.data.object.id ]);
		}
	});
	
	
	
	
	
	
	/**
	 *
	 * Below is non-echo specific event, however, it is added to extend echo's tracking functionalities
	 *
	 */
	// adding tracking events for authors
	function _trackEchoHrefClicks(eventName, element) {
		if(typeof $(element).attr('href') !== 'undefined' && $(element).attr('href') !== 'undefinied' && $(element).attr('href').length !== 0) {
			var href = $(element).attr('href');

			_ca.trackEvent($.extend(_ca._defaultValues, {
				'action': eventName,
				'label': analyticsTool.getStreamItemAction(element),
				'clickthrough_url': href,
				'callback': function() {
					location.href = href;
				}
			}));

			if(window.console)
				console.log(eventName, ' clicked');
		}
	}
	
	
	
})(jQuery);