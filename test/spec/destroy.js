'use strict';

/* jshint undef: false, expr: true */
/* global expect */

(function() {

  describe('iptModal', function() {

    var config = {
    };

    var pluginName = 'plugin_iptManager';
    var selector = 'body';
    var object = null;

    describe('destroy', function() {

      beforeEach(function() {
        object = $(selector).iptManager(config);
      });

      afterEach(function() {
        $(selector).off();
      });

      it('expected to remove data', function() {
        object.data(pluginName).destroy();
        return expect(object.data(pluginName)).to.not.be.ok;
      });

    });

  });

})();
