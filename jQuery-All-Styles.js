jQuery.cssHooks['*'] = {
	/**
	 * Returns all computed styles
	 */
	get: function(element){
		var styles=window.getComputedStyle(element);
		var cssText='';
		var name, value;
		// Collect all styles with their current values
		for(var i=0; i<styles.length; i++){
			name=styles.item(i);
			value=styles.getPropertyValue(name);
			// Only add non empty styles (empty one would refer to compound styles only)
			if(value){
				cssText = cssText + name + ':' + value + ';';
			}
		}
		return cssText;
	},
	/**
	 * Sets style attribute of elements
	 */
	set: function(element, value){
		jQuery(element).attr('style', value);
	}
};