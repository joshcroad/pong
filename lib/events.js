var utils = require('./utils');
var sockets = {};

var routes = module.exports = function (io) {

  io.sockets.on('connection', function (socket) {

    socket.on('join', function (data) {
      sockets[data._id] = socket;
      socket._id = data._id;
      socket.join(data.room);
      socket.room = data.room;
      socket.mobile = data.mobile;

      var newlist = [];
      io.sockets.clients(socket.room).forEach(function (client) {
        if (client.mobile) {
          newlist.push(client._id);
        }
      });
      if (newlist.length === 2) {
        data.players = newlist;
        io.sockets.in(socket.room).emit('gameStart', data);
      }
    });

    socket.on('gogogo', function (data) {
      data.colour = utils.getRandomColour();
      io.sockets.in(socket.room).emit('receiveColour', data);
    });

  });

}
