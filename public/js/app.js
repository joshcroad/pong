'use strict';

var App = (function () {

  return {

    prop: {
      message: document.getElementById('hello'),
      players: document.getElementById('players')
    },

    init: function () {
      App.prop.socket = io.connect(location.protocol + '//' + location.host);
      App.prop._id = Math.floor(Math.random() * 100000000);

      App.initEvents();
      App.bindEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.onConnect.bind(App));
      App.prop.socket.on('gameStart', App.onGameStart.bind(App));
      App.prop.socket.on('receiveColour', App.onChangeColour.bind(App));
    },

    bindEvents: function () {

    },

    onConnect: function () {
      App.prop.message.innerHTML = 'Waiting...';
      App.prop.socket.emit('join', {
        _id: App.prop._id,
        room: gameCode,
        mobile: navigator.userAgent.match(/iPhone/i) ? true : false
      });
    },

    onGameStart: function (data) {
      if (navigator.userAgent.match(/iPhone/i)) {
        // App.Pad.init(); // DISPLAY GAME PAD ON MOBILE
        App.prop.message.innerHTML = '<a data-player_id=\'' + App.prop._id + '\' href=\'\' id=\'gogogo\'>GO GO GO</a>';
        document.getElementById('gogogo').addEventListener('click', function (e) {
          e.preventDefault();
          App.prop.socket.emit('gogogo', {
            _id: e.target.dataset.player_id
          });
        });
      } else {
        App.prop.players.innerHTML = '<ul>';
        data.players.forEach(function (player) {
          App.prop.players.innerHTML += '<li data-player_id="' + player + '">' + player + '</li>';
        });
        App.prop.players.innerHTML += '</ul>';
        // App.Screen.init(); // DISPLAY GAME SCREEN
        App.prop.message.innerHTML = 'game started';
      }
    },

    onChangeColour: function (data) {
      document.querySelectorAll('li[data-player_id=\'' + data._id + '\']')[0].style.color = data.colour;
    }

  };

})();

window.addEventListener('load', App.init.bind(App));
