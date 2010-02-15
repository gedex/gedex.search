/*
 * jQuery gedexSearch
 * @author admin@gedex.web.id - http://gedex.web.id
 * @version 0.1
 * @date February 8, 2010
 * @category jQuery plugin
 * @copyright (c) 2010 admin@gedex.web.id (gedex.web.id)
 * @license MIT licensed
 */
(function($){
    $.fn.gedexSearch = function(params) {
        params = params || {}
        
        var defaults = {
            text: 'Search here..',
            eventOnText: true, // execute callback only
                               // if obj value match with text
            onclick: function(){},
            onblur: function(){}
        }
        
        var o = $.extend(defaults, params);
        var obj = $(this);
        
        obj.click(function() {
            if ( this.value === o.text ) {
                this.value = '';
                if ( typeof(o.onclick) === 'function' && o.eventOnText) {
                    o.onclick();
                }    
            }
            if ( typeof(o.onclick) === 'function' && !o.eventOnText) {
                o.onclick();
            }
        }).blur(function() {
            if ( !this.value.length ) {
                this.value = o.text;
                if ( typeof(o.onblur) === 'function' && o.eventOnText) {
                    o.onblur();
                }
            }
            if ( typeof(o.onblur) === 'function' && !o.eventOnText) {
                o.onblur();
            }
        });
    };
})(jQuery);