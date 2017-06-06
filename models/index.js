var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/tacqueria-rithmo');

//mongoose is not shipped with its own way to handle promises
//wharever promise library you want to use, it is allowed with the next line
mongoose.Promise = Promise //q or bluebird or ES2015 promises

module.exports.Eater = require('./eater')
module.exports.Taco = require('./taco')
