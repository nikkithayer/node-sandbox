var express = require('express');
var router = express.Router();
var phrases = require('../phrases.json');

function returnPhrase(newPhrase){
  return(newPhrase[Math.floor(Math.random()* newPhrase.length)]);
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'it' });
});

router.get('/diary', function(req, res, next) {
  res.render('diary/', {link: '/'});
});

router.get('/dive', function(req, res, next) {
  res.render('dive/', {link: '/'});
});

router.get('/forest', function(req, res, next) {
  res.render('forest/', {link: '/'});
});

router.get('/forest/heaven', function(req, res, next) {
  res.render('forest/heaven', {link: '/'});
});

router.get('/gentlemen', function(req, res, next) {
  res.render('gentlemen/', {link: '/'});
});

router.get('/threeD', function(req, res, next) {
  res.render('threeD/', {link: '/'});
});

router.get('/words', function(req, res, next) {
  var set = returnPhrase(phrases);
  res.render('words/', { phrase: set.phrase, startColor: set.colors[0], endColor: set.colors[set.colors.length-1],text: set.text, effect: set.effect, link: '/' });
});

module.exports = router;


/*
  TODO

  Randomize link instead of going back to index  

*/