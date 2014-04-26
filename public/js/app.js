'use strict';

var App = (function () {

  return {

    prop: {
      message: document.getElementById('hello')
    },

    init: function () {
      App.prop.socket = io.connect(location.protocol + '//' + location.host);

      App.initEvents();
      App.bindEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.onConnect.bind(App));
      App.prop.socket.on('gameStart', App.onGameStart.bind(App));
    },

    bindEvents: function () {
    },

    onConnect: function () {
      App.prop.message.innerHTML = 'Waiting...';
      App.prop.socket.emit('join', {
        _id: Math.floor(Math.random() * 100000000),
        room: gameCode,
        mobile: navigator.userAgent.match(/iPhone/i)
      });
    },

    onGameStart: function (data) {
      if (navigator.userAgent.match(/iPhone/i)) {
        // App.Pad.init(); // DISPLAY GAME PAD ON MOBILE
        // iterate over data.players and put them in string var=players;
        // <div data-player_id="">
        App.prop.players.innerHTML = players;
        App.prop.message.innerHTML = '<a data-player_id=\'\' href=\'\' id=\'gogogo\'>GO GO GO</a>';
      } else {
        // App.Screen.init(); // DISPLAY GAME SCREEN
        App.prop.message.innerHTML = 'game started';
      }
    }

  };

})();

window.addEventListener('load', App.init.bind(App));
