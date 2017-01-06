(function($) {

  'use strict';

  var pluginName = 'iptManager';

  function IPTManager(element, options) {

    /*var datas = {
      component: 'component',
      options: 'component-options'
    };*/

    var defaults = {
      callback: null
    };

    this.element = $(element);

    var settings = $.extend({}, defaults, options);

    this.getSettings = function() {
      return settings;
    };

    this.destroy = function() {
      //unbindTemporaryEvents();
      //unbindUnobtrusiveEvents();
      this.element.removeData('plugin_' + pluginName);
    };

    function init() {
      //addEventListeners();
    }

    init();
  }

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new IPTManager(this, options));
      }
    });
  };

})(jQuery);
