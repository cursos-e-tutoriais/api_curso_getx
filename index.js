const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index');

const router = express.Router();
const app = express();
app.use('/', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/v1', (req, res) => {
    res.status(200).json({
        message: 'Api v1'
    });
});

require('./routes/register-user')(app);
require('./routes/login-user')(app);
require('./routes/user-data')(app);

db.once('open', () =>{
    console.log('Connected to mongoose')
    app.listen(8080, (req, res) => {
        console.log('Servidor rodando, Ctrl+c para encerrar');
    });
});