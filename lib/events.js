var sockets = {};

var routes = module.exports = function (io) {

  io.sockets.on('connection', function (socket) {

    socket.on('join', function (data) {
      sockets[data._id] = socket;
      socket.join(data.room);
      socket.room = data.room;
      socket.mobile = data.mobile;

      var newlist = [];
      io.sockets.clients(socket.room).forEach(function (client) {
        if (client.mobile) {
          newlist.push(client);
        }
      });
      if (newlist.length === 2) {
        io.sockets.in(socket.room).emit('gameStart', data);
      }
    });

  });

}
