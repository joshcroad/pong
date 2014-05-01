'use strict';

App.Screen = (function () {

  return {

    prop: {
      message: document.getElementById('hello'),
      players: document.getElementById('players')
    },

    init: function () {
      App.Screen.initEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.Screen.onConnect.bind(App.Screen));
      App.prop.socket.on('gameStart', App.Screen.onGameStart.bind(App.Screen));
      App.prop.socket.on('receiveColour', App.Screen.onChangeColour.bind(App.Screen));
    },

    onConnect: function () {
      App.Screen.prop.message.innerHTML = 'Waiting...';
      App.prop.socket.emit('join', {
        _id: App.prop._id,
        room: gameCode,
        mobile: false
      });
    },

    onGameStart: function (data) {
      App.Screen.prop.players.innerHTML = '<ul>';
      data.players.forEach(function (player) {
        App.Screen.prop.players.innerHTML += '<li data-player_id="' + player + '">' + player + '</li>';
      });
      App.Screen.prop.players.innerHTML += '</ul>';
      App.Screen.prop.message.innerHTML = 'game started';
    },

    onChangeColour: function (data) {
      document.querySelectorAll('li[data-player_id=\'' + data._id + '\']')[0].style.color = data.colour;
    }

  };

})();

if (document.getElementById('screen')) {
  window.addEventListener('load', App.Screen.init.bind(App.Screen));
}
