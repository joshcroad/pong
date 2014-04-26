/**
 * Define your routes in this file. Two example routes are added below, showing
 * the 'home' and '404' views.
 */
var utils = module.exports = {

  generateGameCode: function (req, res, next) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var length = alphabet.length;
    var code = '';

    for (var i = 0; i < 5; i++) {
        code += alphabet.charAt(Math.random() * length);
    }
    
    req.params.gameCode = code;
    next();
  }

}
