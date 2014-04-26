'use strict';

var App = (function () {

  return {

    prop: {
    },

    init: function () {
      App.prop.socket = io.connect(location.protocol + '//' + location.host);

      App.initEvents();
      App.bindEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.onConnect.bind(App));
    },

    bindEvents: function () {
    },

    onConnect: function () {
      App.prop.socket.emit('join', {
        _id: Math.random(),
        code: gameCode
      });
    }

  };

})();

window.addEventListener('load', App.init.bind(App));
