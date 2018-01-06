var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors =require('cors');


var athlet=require('./routes/athlets')

var port = 3000;

var app = express();

  //View Engine
  app.set('views', path.join(__dirname, 'client/views'));
  app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);

  //Set Static Folder
  app.use(express.static(path.join(__dirname, "client/views"))) ;

    // adding middleware
   app.use(cors());

  //Body parser MiddleWare
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  //Routing
  app.get('/', function(req, res){
  res.render('/views/index.html');
  });
  app.use('/api', athlet);

  app.listen(port, function(){
  console.log('server started on port'+ port);
  });