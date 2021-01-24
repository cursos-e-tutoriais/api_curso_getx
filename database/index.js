const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projeto_curso', {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(console.error);
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection;