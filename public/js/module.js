'use strict';

App.Module = (function () {

  return {

    init: function () {
      console.log('\'Module\' module has loaded.');
    }

  };

})();

if (document.getElementById('module')) {
  window.addEventListener('load', App.Login.init.bind(App.Login));
}
