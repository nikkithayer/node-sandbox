var express = require('express');
var router = express.Router();
var phrases = require('../phrases.json');
var fs = require('fs');
var redis = require("redis"),
    client = redis.createClient();
    
const staticView = "views/";

function returnPhrase(newPhrase){
  return(newPhrase[Math.floor(Math.random()* newPhrase.length)]);
}

client.on("error", function (err) {
    console.log("Error " + err);
});

//when router gets a response to a question
//store it under the key "answers from god"
//when user clicks a button, it shows one answer

client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
//    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
//        console.log("    " + i + ": " + reply);
    });
    client.quit();
});


router.get('/forest/posttest', function(req, res, next) {
  res.render('forest/posttest', {
    data: {},
    errors: {},
    link: '/'
  })
});

router.post('/forest/posttest', (req, res) => {
  res.render('forest/posttest', {
    data: req.body, // { message, email }
    errors: {
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: 'That email doesn‘t look right'
      }
    }
  })
})










/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'it', client: client });
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

/*
CURRENTLY checkFile doesn't return true in comparison, loading manually for now.

router.get('/*', function(req, res, next) {
  var rawPath = req.path.substr(1, req.path.length);
  console.log("Checkfile"+checkFile(rawPath));
    var renderPath = rawPath+"/";
    console.log(renderPath);
    res.render(renderPath, { title: 'it', client: client });  
});

function checkFile(pathname){
  fs.readdir(staticView, (err, files) => {
    if(files.includes(pathname)){ return true;};
    console.log(files + pathname + isTrue);
  });
  console.log("do we see this"+isTrue);  
  return isTrue;
}
*/


module.exports = router;