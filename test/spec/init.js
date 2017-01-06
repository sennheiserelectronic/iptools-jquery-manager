'use strict';

/* jshint undef: false */
/* global expect */

(function() {

  describe('iptManager', function() {

    var config = {
      callback: function() {  }
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

    });

  });

})();
