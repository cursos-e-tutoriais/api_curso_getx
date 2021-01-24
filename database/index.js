const mongoose = require('mongoose');

mongoose.connect('mongodb:localhost/projeto-curso');
mongoose.Promise = global.Promise;

module.exports = mongoose;