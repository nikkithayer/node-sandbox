var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express yay', request: req, response: res, next: next });
});

/* GET home page. */
router.get('/keytext', function(req, res, next) {
  res.render('keytext', { title: 'Express yay', request: req, response: res, next: next });
});

module.exports = router;


/*
  IMMEDIATE PROJECTS



*/