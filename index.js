var SettingsApi = require('./lib/settingsapi');


/**
 * @constructor
 * @param {Apps} apps private marionette apps api. ???
 */
function MarionetteSettingsApi(settingsApi) {
  for (var key in MarionetteSettingsApi.ModuleToFunction) {
    var methodName = MarionetteSettingsApi.ModuleToFunction[key];
    var module = require('./lib/' + key);
    // bind the public interface to the object
    this[methodName] = module[methodName].bind(null, settingsApi);
  }
}

/**
 * Map of public modules to expose to the main interface.
 * Key is module, value is function on the module.
 */
MarionetteSettingsApi.ModuleToFunction = {
  getsetting: 'getSetting',
  setsetting: 'setSetting'
};


/**
 * Create a new marionette settings api plugin.
 * @param {Marionette.Client} client marionette client to use.
 * @param {Objects} options optional configuration.
 * @return {MarionetteSettingsApi} new marionette settings.
 */
function setup(client, options) {
  var settingsApi = MarionetteSettingsApi.setup(client, options);
  return new MarionetteSettingsApi(settingsApi);
}

module.exports.setup = setup;
