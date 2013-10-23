suite('getSetting', function() {
  // requires
  var SettingsApi = require('../lib/settingsapi'),
      getSetting = require('../lib/getsetting').getSetting
      client = createClient(),
      helper = require('../lib/helper');

  console.log('about to call helper');
  helper.skipInitialError(client);
  console.log('called helper');

  marionette.plugin('mozSettingsApi', SettingsApi);

  test('getSetting can return a string', function(done) {
    getSetting(client.mozSettingsApi, 'language.current', function(err, value) {
      console.log(value);
      assert.ok(value.length > 0);
      done();
    });
  });

});
