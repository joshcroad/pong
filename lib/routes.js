var utils = require('./utils');

/**
 * Define your routes in this file. Two example routes are added below, showing
 * the 'home' and '404' views.
 */
var routes = module.exports = function (app) {

  app.get('/', function (req, res) {
    return res.json({
      lol: 'hi'
    });
  });

  app.get('/new', utils.generateGameCode, function (req, res) {
    return res.redirect(req.params.gameCode);
  });

  app.get('/:gameCode', function (req, res) {
    if (req.mobile) {
      return res.redirect('/' + req.params.gameCode + '/controller');
    }
    return res.render('screen', {
      code: req.params.gameCode
    });
  });

  app.get('/:gameCode/controller', function (req, res) {
    if (!req.mobile) {
      return res.redirect('/' + req.params.gameCode);
    }
    return res.render('controller', {
      code: req.params.gameCode
    });
  });

}
