(function($) {

  'use strict';

  var pluginName = 'iptDummyComponent';

  function IPTDummyComponent(element, options) {

    var defaults = {
      title: 'Default title'
    };

    this.element = $(element);

    var settings = $.extend({}, defaults, options);

    this.getSettings = function() {
      return settings;
    };

    this.destroy = function() {
      this.element.removeData('plugin_' + pluginName);
    };

    function init() {
    }

    init();
  }

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new IPTDummyComponent(this, options));
      }
    });
  };

})(jQuery);
