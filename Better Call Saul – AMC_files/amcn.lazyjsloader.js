/**
 * Lazy Javascript Loader. 
 */
function LazyJSLoader(){
	this.async = false;
	this.cache = true;
}
LazyJSLoader.prototype = {
	queued : [],
	queue : function(urls, callback) {

		// undefinied
		if(typeof callback == 'undefined' || callback === null) {
			callback = function() { };
		}

		// make sure this is an array
		if(Object.prototype.toString.apply(urls) !== '[object Array]') {
			urls = [urls];
		}

		// queue up urls.
		var empty_callback = function(){};
		while(urls.length > 1) {
			this.queued.push({
				'url' : urls.shift(),
				'callback' : empty_callback
			});
		}
		this.queued.push({
			'url' : urls.shift(),
			'callback' : callback
		});
	},

	// load content
	load : function() {
		if(this.queued.length > 0) {
			var js = this.queued.shift();
			var my = this;
			jQuery.ajax({
				url: js.url,
				async : my.async,
				cache : my.cache,
				dataType : "script",
				success : function(data, textStatus, jqxhr) {
					js.callback(data, textStatus, jqxhr);
					my.load();
				}
			});
		}
	}
};