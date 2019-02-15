/* importar so módulo do framework express, consign, body-parser, express-validator e express*/
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/*Iniciar o objeto do express*/
var app = express();

/*Setar as variáveis 'view engine' e 'vies' dp express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar os middleware's express.static, body-parser e express-validator*/
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/*Configurar o consign para fazer o autoload das rotas de models e controllers para o objeto app*/
consign()
      .include('app/routes')
      .then('app/models')
      .then('app/controllers')
      .into(app);

/*exportar o obejto app*/
module.exports = app;
