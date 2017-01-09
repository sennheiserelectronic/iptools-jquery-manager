(function($) {

  'use strict';

  var pluginName = 'iptManager';

  function IPTManager(element, options) {

    var datas = {
      component: 'component',
      options: 'component-options'
    };

    var selectors = {
      componentNode: '*[data-component]',
      ajaxEventEmitter: 'body'
    };

    var defaults = {
      callback: null
    };

    this.element = $(element);

    var settings = $.extend({}, defaults, options);
    var self = this;

    this.destroy = function() {
      //unbindTemporaryEvents();
      //unbindUnobtrusiveEvents();
      this.element.removeData('plugin_' + pluginName);
    };

    this.initComponents = function() {
      $(selectors.componentNode).each(function(index, node) {
        var name = $(node).data(datas.component);
        var options = $(node).data(datas.options) || {};
        if (!$(node).data('plugin_' + name)) {
          $(node)[name](options);
        }
      });
    };

    this.getSettings = function() {
      return settings;
    };

    function handleAjaxComplete(event) {
      self.initComponents();
    }

    function addEventListeners() {
      $(selectors.ajaxEventEmitter).on('ajax:complete', handleAjaxComplete);
    }

    function init() {
      addEventListeners();
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
