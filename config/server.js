/* import o modulo do framework express*/
var express = require('express');

/* import consign */
var consign = require('consign');

/*import bodyParser */
var bodyParser = require('body-parser');

/*import o modulo do express validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* setar as variveis que a viewEngine e views do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configura o moddleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true}));

/* configurar o middleware express validator */
app.use(expressValidator());

/* efetua o auto load das rotas, odels, controles para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)


/* exportar o objeto app */
module.exports = app;


