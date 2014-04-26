var utils = require('./utils');

/**
 * Define your routes in this file. Two example routes are added below, showing
 * the 'home' and '404' views.
 */
var routes = module.exports = function (app) {

  app.get('/', function (req, res) {
    return res.render('game');
  });

  app.get('/new', utils.generateGameCode, function (req, res) {
    return res.redirect(req.params.gameCode);
  });

  app.get('/:gameCode', function (req, res) {
    if (req.url !== '/favicon.ico') {
      return res.render('game', {
        code: req.params.gameCode
      });
    }
  });

}
