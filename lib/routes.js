/**
 * Define your routes in this file. Two example routes are added below, showing
 * the 'home' and '404' views.
 */
var routes = module.exports = function (app) {

  app.get('/', function (req, res) {
    return res.render('index');
  });

  app.use(function (req, res) {
    return res.render('404');
  });

}
