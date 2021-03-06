/**
 * Define your routes in this file. Two example routes are added below, showing
 * the 'home' and '404' views.
 */
var utils = module.exports = {

  generateGameCode: function (req, res, next) {
    var alphabet = '1234567890';
    var length = alphabet.length;
    var code = '';

    for (var i = 0; i < 5; i++) {
        code += alphabet.charAt(Math.random() * length);
    }

    req.params.gameCode = code;
    next();
  },

  getRandomColour: function () {
    var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'hotpink'];
    return colours[Math.floor(Math.random() * colours.length)];
  }

}
