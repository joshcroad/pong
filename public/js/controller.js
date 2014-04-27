'use strict';

App.Controller = (function () {

  return {

    prop: {
      message: document.getElementById('hello')
    },

    init: function () {
      App.Controller.initEvents();
    },

    initEvents: function () {
      App.prop.socket.on('connect', App.Controller.onConnect.bind(App.Controller));
      App.prop.socket.on('gameStart', App.Controller.onGameStart.bind(App.Controller));
    },

    onConnect: function () {
      App.Controller.prop.message.innerHTML = 'Waiting...';
      App.prop.socket.emit('join', {
        _id: App.prop._id,
        room: gameCode,
        mobile: true
      });
    },

    onGameStart: function (data) {
      App.Controller.prop.message.innerHTML = '<a data-player_id=\'' + App.prop._id + '\' href=\'\' id=\'gogogo\'>GO GO GO</a>';
      document.getElementById('gogogo').addEventListener('click', function (e) {
        e.preventDefault();
        App.prop.socket.emit('gogogo', {
          _id: e.target.dataset.player_id
        });
      });
    }

  };

})();

if (document.getElementById('controller')) {
  window.addEventListener('load', App.Controller.init.bind(App.Controller));
}
