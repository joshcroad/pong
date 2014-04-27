'use strict';

App.Game = (function () {

  return {

    prop: {
      message: document.getElementById('hello'),
      players: document.getElementById('players')
    },

    init: function () {
      App.Game.initEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.Game.onConnect.bind(App.Game));
      App.prop.socket.on('gameStart', App.Game.onGameStart.bind(App.Game));
      App.prop.socket.on('receiveColour', App.Game.onChangeColour.bind(App.Game));
    },

    onConnect: function () {
      App.Game.prop.message.innerHTML = 'Waiting...';
      App.prop.socket.emit('join', {
        _id: App.prop._id,
        room: gameCode,
        mobile: false
      });
    },

    onGameStart: function (data) {
      App.Game.prop.players.innerHTML = '<ul>';
      data.players.forEach(function (player) {
        App.Game.prop.players.innerHTML += '<li data-player_id="' + player + '">' + player + '</li>';
      });
      App.Game.prop.players.innerHTML += '</ul>';
      App.Game.prop.message.innerHTML = 'game started';
    },

    onChangeColour: function (data) {
      document.querySelectorAll('li[data-player_id=\'' + data._id + '\']')[0].style.color = data.colour;
    }

  };

})();

if (document.getElementById('game')) {
  window.addEventListener('load', App.Game.init.bind(App.Game));
}
