var express  = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var exphbs = require('express3-handlebars');
var checkDevice = require('connect-mobile-detection');
var routes = require('./routes');
var config = require('./config');
var events = require('./events');
var port = process.env.PORT || config.port || 3000;

/**
 * Set up environment. This is used by hosting services e.g. Heroku. You can
 * also manually set 'env' in your config.json or config.prod.json file.
 */
process.env.NODE_ENV = config.env || process.env.NODE_ENV || 'development';

app.connect = function () {
  io.set('log level', 1);

  app.set('version', require('../package').version);

  /**
   * Using Handlebars for view engine. This can be easily changed depending on
   * preference.
   */
  app.set('views', __dirname + '/../views');
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  }));
  app.set('view engine', '.hbs');
  app.disable('view cache');

  /**
   * Set up middleware for Express.
   */
  app.use(express.compress());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use('/public', express.static(__dirname + '/../public', {
    maxAge: 86400000
  }));
  app.use(checkDevice());
  app.use(app.router);
  app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.send(err.stack);
  });

  /**
   * Define routes in seperate file to keep app.js tidy. We pass in 'app' to be
   * able to use app.VERB().
   */
  routes(app);

  events(io);

  /**
   * Start the engines. The name and version are populated from the package.json
   * file located at the root.
   */
  server.listen(port);
  console.log(require('../package').name + ' v' + app.get('version') + ' is up and running on port ' + port + '.');
};

module.exports = app;

if (require.main === module) {
  app.connect();
}
