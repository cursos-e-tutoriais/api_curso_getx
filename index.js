const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const app = express();

app.listen(8080, (req, res) => {
    console.log('Servidor rodando, Ctrl+c para encerrar');
});