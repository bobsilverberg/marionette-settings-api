var fs = require('fs');

/**
 * Get a setting
 *
 * @param {SettingsApi} SettingsApi state.
 * @param {String} name of the setting.
 * @param {Function} callback [Err err, String value].
 * @return {String} value of the setting.
 */
function getSetting(settingsApi, name, callback) {

  callback = callback || settingsApi._client.defaultCallback;
  console.log('inside lib/getsetting.getSetting()');

  var script = fs.readFileSync(
    __dirname + '/scripts/getsetting.js',
    'utf8'
  );

  console.log('about to return client.executeAsyncScript');
  return client.executeAsyncScript(script, [name], function(err, operation) {
    console.log('inside client.executeAsyncScript');
    console.log('inside client.executeAsyncScript. name: ' + name);

    // handle scripting error
    if (err) {
      console.log('inside if (err)');
      console.log('err: ' + err);
      return callback(err);
    }

    // handle error from operation
    if (operation.error) {
      console.log('inside if (operation.error)');
      return callback(new Error(operation.error));
    }
    // return the value
    console.log('about to return the callback');
    console.log('operation.result: ' + operation.result);
    return callback(null, operation.result);
  });

}

module.exports.getSetting = getSetting;
