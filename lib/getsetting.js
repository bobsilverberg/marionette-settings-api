var fs = require('fs');

/**
 * Find all apps.
 *
 *    apps.list(apps, function(err, list) {
 *      // list is an array of "Apps"
 *      list[0].origin; // origin of a given app
 *    });
 *
 * @param {SettingsApi} SettingsApi state.
 * @param {String} name of the setting.
 * @param {Function} callback [Err err, String value].
 * @return {String} value of the setting.
 */
function getSetting(settingsApi, name, callback) {
  console.log('getSetting was called with ' + name);

  callback = callback || settingsApi._client.defaultCallback;

  console.log('callback set: ' + callback);

  var script = fs.readFileSync(
    __dirname + '/scripts/getsetting.js',
    'utf8'
  );

  console.log('script set: ' + script);

//  var client = this._client.scope({ context: 'content' });

  return client.executeAsyncScript(script, function(err, operation) {
    // handle scripting error
    if (err) {
      console.log('err: ' + err);
      return callback(err);
    }

    // handle error from operation
    if (operation.error) {
      return callback(new Error(operation.error));
    }

    // success format the apps
    return callback(null, 'mock value');
  });

    /*
    SpecialPowers.addPermission('settings-read', true, document);
    var req = window.window.navigator.mozSettings.createLock().get(name);
    req.onsuccess = function() {
      console.log('setting retrieved: ' + name);
      var result = name === '*' ? req.result : req.result[name];
      return callback(null, result);
    };
    req.onerror = function() {
      console.log('error getting setting', req.error.name);
      return callback(new Error('error getting setting "' + req.error.name + '"'));
    }

    return 'mock value';
  }), callback);
    */
}

module.exports.getSetting = getSetting;





/**
 * Return the value for a setting.
 *
 * @param {Function} callback [Error, setting value].
 */
/*
function getSetting(name, callback) {

  callback = callback || state._client.defaultCallback;

  // how to return an error: return callback(new Error('invalid entrypoint "' + entrypoint + '"'));

  SpecialPowers.addPermission('settings-read', true, document);
  var req = window.navigator.mozSettings.createLock().get(name);
  req.onsuccess = function() {
    console.log('setting retrieved');
    let result = name === '*' ? req.result : req.result[name];
    return callback(null, result);
  };
  req.onerror = function() {
    console.log('error getting setting', req.error.name);
    return callback(new Error('error getting setting "' + req.error.name + '"'));
  }
}

module.exports.getSetting = getSetting;
*/
