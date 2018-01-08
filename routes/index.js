var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/summary', function(req, res) {
  res.render('summary');
});

router.get('/homepage', function(req, res) {
  res.render('homepage');
});
    module.exports = router;