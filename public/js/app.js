'use strict';

var App = (function () {

  return {

    prop: {
      socket: io.connect(location.protocol + '//' + location.host),
      _id: Math.floor(Math.random() * 100000000)
    },

    init: function () {

    }

  };

})();

window.addEventListener('load', App.init.bind(App));
