var express = require('express');
var router = express.Router();
var phrases = require('../phrases.json');

function returnPhrase(newPhrase){
  return(newPhrase[Math.floor(Math.random()* newPhrase.length)]);
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express yay', request: req, response: res, next: next });
});

/* GET word - link is going to be changed to anything in server later */
router.get('/word', function(req, res, next) {
  var set = returnPhrase(phrases);
  res.render('word', { phrase: set.phrase, startColor: set.colors[0], endColor: set.colors[set.colors.length-1],text: set.text, effect: set.effect, link: '/word' });
});

router.get('/jump', function(req, res, next) {
  res.render('jump', {link: '/'});
});

module.exports = router;


/*
  IMMEDIATE PROJECTS

  keytext is a single route which pulls a JSON file of colors and phrases and loads one at random along with a randomized link, which can be keytext or index
  

*/