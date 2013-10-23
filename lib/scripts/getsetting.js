(function(name) {

  console.log('it worked!');
  console.log('inside script. name: ' + name);
  SpecialPowers.addPermission('settings-read', true, document);
  var req = window.navigator.mozSettings.createLock().get(name);
  var newReq = req.wrappedJSObject;
  console.log('req: ' + req);
  console.log('req unwrapped: ' + newReq);
  console.log('req unwrapped keys: ' + Object.keys(newReq));
  console.log('req unwrapped result: ' + newReq.result);
  console.log('req unwrapped error: ' + newReq.error);
  console.log('req unwrapped readystate: ' + newReq.readyState);
  console.log('req unwrapped onsuccess: ' + newReq.onsuccess);
  newReq.onsuccess = function() {
    console.log('setting retrieved');
    result = name === '*' ? req.result : req.result[name];
    marionetteScriptFinished({ result: result });
  };
  newReq.onerror = function() {
    console.log('error getting setting', req.error.name);
    marionetteScriptFinished({ error: req.error.name });
  };
  console.log('about to return the mock value');
//  marionetteScriptFinished({ result: 'bob-test' });

})();
