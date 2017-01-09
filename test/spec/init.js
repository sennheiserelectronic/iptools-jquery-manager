'use strict';

/* jshint undef: false */
/* global expect */

(function() {

  describe('iptManager', function() {

    var callback = function() {};
    var config = {
      callback: callback
    };

    var pluginName = 'plugin_iptManager';
    var selector = 'body';
    var object = null;

    describe('init', function() {

      beforeEach(function() {
        object = $(selector).iptManager(config);
      });

      afterEach(function() {
        object.data(pluginName).destroy();
      });

      it('expected to construct object', function() {
        return expect(object).to.be.an.object;
      });

      it('expected to set callback', function() {
        return expect(object.data(pluginName).getSettings().callback).to.eql(callback);
      });

    });

  });

})();
