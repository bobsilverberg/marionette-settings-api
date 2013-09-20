//var SettingsAPI = require('../lib/settingsapi');
//
//marionette('public interface', function() {
//  var client = createClient();
//  marionette.plugin('SettingsAPI', require('../index'));
//
//  suite('#list', function() {
//    var apps;
//
//    setup(function(done) {
//      if (client.isSync) {
//        apps = client.apps.list();
//        done();
//      } else {
//        client.apps.list(function(err, _apps) {
//          apps = _apps;
//          done();
//        });
//      }
//    });
//
//    test('should return many things', function() {
//      assert.notStrictEqual(apps.length, 0);
//    });
//
//    test('should return things and only things that are apps', function() {
//      apps.forEach(function(app) {
//        assert.ok(app instanceof App, app.origin);
//      });
//    });
//  });
//
//});
