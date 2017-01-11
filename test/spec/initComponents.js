'use strict';

/* jshint undef: false */
/* global expect */

(function() {

  describe('iptManager', function() {

    var config = {
      callback: function() {},
      initEvent: 'iptComponent:complete',
      initEventEmitter: 'body'
    };

    var pluginName = 'plugin_iptManager';
    var selectors = {
      body: 'body',
      dummyComponentWithOptions: '#dummy1',
      dummyComponentWithoutOptions: '#dummy2'
    };
    var object = null;

    describe('initComponents', function() {

      context('with direct API call', function() {

        beforeEach(function() {
          object = $(selectors.body).iptManager(config);
          object.data(pluginName).initComponents();
        });

        afterEach(function() {
          $(selectors.dummyComponentWithoutOptions).data('plugin_iptDummyComponent').destroy();
          $(selectors.dummyComponentWithOptions).data('plugin_iptDummyComponent').destroy();
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

      context('with configured event trigger', function() {

        beforeEach(function() {
          object = $(selectors.body).iptManager(config);
          $(config.initEventEmitter).trigger('iptComponent:complete');
        });

        afterEach(function() {
          $(selectors.dummyComponentWithoutOptions).data('plugin_iptDummyComponent').destroy();
          $(selectors.dummyComponentWithOptions).data('plugin_iptDummyComponent').destroy();
          object.data(pluginName).destroy();
        });

        context('with component options set in markup', function() {
          it('expected to set given title', function() {
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

      context('with non-configured event trigger', function() {

        beforeEach(function() {
          object = $(selectors.body).iptManager(config);
          $(config.initEventEmitter).trigger('ajax:complete');
        });

        afterEach(function() {
          object.data(pluginName).destroy();
        });

        it('expected to not initialise', function() {
          var component = $(selectors.dummyComponentWithOptions).data('plugin_iptDummyComponent');
          return expect(component).to.be.undefined;
        });

      });

    });

  });

})();
