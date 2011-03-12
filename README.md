Usage
=====

Load the JavaScript file into your page after jQuery was loaded.

    // Reading the computed style (same format as style attribute)
    var cssText = jQuery(element).css('*');
    
    // Setting the style attribute
    jQuery(element).css('*', cssText);

Being able to read all the computed styles at once makes it easier to clone the visual appearance of an element independet of position in the document and applying classes. The plugin should work cross-browser but has only been tested in Firefox 4 so far.
