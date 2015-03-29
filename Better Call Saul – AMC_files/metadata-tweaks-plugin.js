(function($) {

Echo.createPlugin({
	"name": "MetadataTweaks",
	"applications": ["Submit"],
	"init": function(plugin, application) {
		$.map(["tags", "markers"], function(field) {
			var value = application.config.get(plugin.config(field));
			if (!value || !value.length) return;
			if (application.user.isAdmin()) {
				application.config.set(field, value);
			}
			plugin.extendRenderer("Submit", field, function(element) {
				if (!application.user.isAdmin()) {
					element.val(value.join(","));
				}
				application.parentRenderer(field, arguments);
			});
		});
	}
});

})(jQuery);