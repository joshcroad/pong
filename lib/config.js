var fs = require('fs');
var config = require('../config.json');
var extend = require('xtend');

/**
 * We use a seperate config module for a good reason. If you're working on an
 * open source project, for example, there will be certain credentials that you
 * won't want to commit (such as API keys, database credentials etc).
 *
 * The easiest way to get around this is to put all of these details into a new
 * file called 'config.prod.json'. The code below will override any duplicate
 * values in 'config.json' with those in 'config.prod.json'.
 *
 * Note that 'config.prod.json' is listed in your .gitignore file.
 */
if (fs.existsSync('config.prod.json')) {
  config = extend(config, require('../config.prod.json'));
}

module.exports = config;
