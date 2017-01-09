'use strict';

/* jshint undef: false */
/* global expect */

(function() {

  describe('iptManager', function() {

    var config = {
      callback: function() {  }
    };

    var pluginName = 'plugin_iptManager';
    var selectors = {
      body: 'body',
      dummyComponentWithOptions: '#dummy1',
      dummyComponentWithoutOptions: '#dummy2'
    };
    var object = null;

    describe('initComponents', function() {

      beforeEach(function() {
        object = $(selectors.body).iptManager(config);
        object.data(pluginName).initComponents();
      });

      afterEach(function() {
        object.data(pluginName).destroy();
      });

      context('with component options set in markup', function() {

        it('expected to set title from component options in markup', function() {
          var component = $(selectors.dummyComponentWithOptions).data('plugin_iptDummyComponent');
          return expect(component.getSettings().title).to.eql('Non-default Mocha test title');
        });

      });

      context('without component options set in markup', function() {

        it('expected to set default title', function() {
          var component = $(selectors.dummyComponentWithoutOptions).data('plugin_iptDummyComponent');
          return expect(component.getSettings().title).to.eql('Default title');
        });

      });

    });

  });

})();
