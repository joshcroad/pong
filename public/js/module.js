'use strict';

/**
 * A module called 'Module'. Confusing? Probably. Notice the omission of 'var'.
 * We're simply adding a 'Module' module to our existing 'App' module. No need to
 * worry about naming clashes with the App module's functions - all modules begin
 * with an uppercase letter.
 */
App.Module = (function () {

  return {

    init: function () {
      console.log('\'Module\' module has loaded.');
    }

  };

})();

/**
 * Here, we only initialise the module when a particular element exists on the
 * page. This is useful to prevent calling functions without needing to.
 *
 * In reality, a module might be for a login page for instance.
 */
if (document.getElementById('module')) {
  window.addEventListener('load', App.Login.init.bind(App.Login));
}
