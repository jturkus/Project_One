/*
 *******************************************************************************************
 *
 * ItemContentNormalizer
 *
 * Plugin used to Modify and remove potentially malicious
 * content in addition to echo query's agressive
 * sanitization.
 *
 * @author Yoshitaka Ito
 * @version 1.0 - Initial Deployment - Strips out image and objects
 *
 *******************************************************************************************
 */

(function($){

	/**
	 * Custom Plugin. ItemContentNormalizer
	 * 
	 * Default Plugin to normalize content for AMC. Strips out images as well as 
	 * 
	 */
	var normalizer = Echo.createPlugin({
	       "name": "ItemContentNormalizer",
	       "applications": ["Stream"],
	       "init": function(normalizer, application) {
	        	normalizer.extendRenderer("Item", "body", normalizer.bodyItemRenderer);
				normalizer.extendRenderer("Item", "date", normalizer.dateItemRenderer);
	       }
	});
	normalizer.bodyItemRenderer = function(element) {
		var item = this;
		item.data.object.content = item.data.object.content.replace(/<object(.*?)<\/object>/g, "");
		item.data.object.content = item.data.object.content.replace(/<img(.*?)>/g, "");
		item.parentRenderer("body", arguments);
	};
	normalizer.dateItemRenderer = function(element) {
		var item = this;
		item.calcAge();
		var md5Hash = md5(item.id);
		if(typeof item.data.actor != 'undefined') {
			var href = new EchoTools.Users().getProfileURL(item.data.actor) + "/item/" + md5Hash;
			return '<span class="echo-date-clickthrough"' + ' data-md5="' + escape(md5Hash) + '">' + item.age + "</span>";
		}
		return item.age;
	}

})(jQuery);