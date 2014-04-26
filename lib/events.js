var sockets = {};

var routes = module.exports = function (io) {

  io.sockets.on('connection', function (socket) {

    socket.on('join', function (data) {
      sockets[data._id] = socket;

      socket.join(data.room);
      socket.room = data.room;

      console.log(data._id + ' connected');
    });

  });

}
