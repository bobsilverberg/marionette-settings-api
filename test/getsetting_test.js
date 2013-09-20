suite('getSetting', function() {
  // requires
  var SettingsApi = require('../lib/settingsapi'),
      getSetting = require('../lib/getsetting').getSetting
      client = createClient();

  marionette.plugin('mozSettingsApi', SettingsApi);


  test('getSetting can return a string', function(done) {
    getSetting(client.mozSettingsApi, 'language.current', function(err, value) {
      console.log(value);
      assert.ok(value.length > 0);
      done();
    });
  });

});

/*
suite('getsetting', function() {
  var getSetting = require('../lib/getsetting').getSetting;

  marionette.plugin('mozSettingsApi', require('../lib/settings'));
  var client = createClient();

  var calendarOrigin = 'app://calendar.gaiamobile.org';

  test('success get setting', function(done) {
    getSetting(client.mozApps, calendarOrigin, function(err, app) {
      assert.equal(app.origin, calendarOrigin, 'origin');
      assert.equal(app.source, calendarOrigin, 'source');
      done();
    });
  });

    suite('#list', function() {
    var apps;

    setup(function(done) {
      if (client.isSync) {
        apps = client.apps.list();
        done();
      } else {
        client.apps.list(function(err, _apps) {
          apps = _apps;
          done();
        });
      }
    });

    test('should return many things', function() {
      assert.notStrictEqual(apps.length, 0);
    });

    test('should return things and only things that are apps', function() {
      apps.forEach(function(app) {
        assert.ok(app instanceof App, app.origin);
      });
    });
  });

*/

//  test('missing origin', function(done) {
//    var origin = 'xfoobarbaz';
//    getSetting(client.mozApps, origin, function(err) {
//      assert.ok(err, 'has error');
//      assert.ok(err.message.match(origin, 'has correct type of error'));
//      done();
//    });
//  });
//
//  suite('entrypoint apps', function() {
//    var origin = 'app://communications.gaiamobile.org';
//    var app;
//
//    // get the app without the entrypoint
//    setup(function(done) {
//      app = getSetting(client.mozApps, origin, function(err, _app) {
//        app = _app;
//        done(err);
//      });
//    });
//
//    test('success', function(done) {
//      getSetting(client.mozApps, origin, 'contacts', function(err, contacts) {
//        assert.deepEqual(
//          contacts.entrypoint,
//          {
//            name: 'contacts',
//            details: app.manifest.entry_points.contacts
//          },
//          'entrypoint'
//        );
//
//        var launchPath = contacts.entrypoint.details.launch_path;
//
//        assert.ok(contacts.source.indexOf(origin) !== -1, 'has origin');
//        assert.ok(
//          contacts.source.indexOf(launchPath) !== -1,
//          'has launchPath'
//        );
//
//        done();
//      });
//    });
//
//    test('failure', function(done) {
//      var entrypoint = 'epicfail';
//      getSetting(client.mozApps, origin, entrypoint, function(err) {
//        assert.ok(err, 'has error');
//        assert.ok(
//          err.message.match(entrypoint),
//          'error message contains: ' + entrypoint
//        );
//        done();
//      });
//    });
//  });

//});

