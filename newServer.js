var http = require('http');
var tweet = require('twitter');

var PORTONE = 7000;
var PORTTWO = 7500;

var niceThings = ["Your career is about to launch!","Happy Days of the Dead!","The soundtrack kicks butt!"];
var badThings = ["Your church makes me vomit!","Your costume direly needs accessories!","Get your clothes out of the suitcase already!"];
var rand1 = Math.floor(Math.random() * niceThings.length);
var rand2 = Math.floor(Math.random() * badThings.length);

function handleRequestOne(request, response) {
	response.end(niceThings[rand1]);
}

function handleRequestTwo(request, response) {
	response.end(badThings[rand2]);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function(){
	console.log("This server is listening on http://localhost:%s",PORTONE);
});

serverTwo.listen(PORTTWO, function(){
	console.log("This server is listening on http://localhost:%s",PORTTWO);
});

var twitKeys = require('./keys.js');
var keyList = twitKeys.twitterKeys;

var client = tweet(keyList);
var randTweet = Math.floor(Math.random() * 20);

var params = {screen_name: 'EdgarTlamatini'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log("Random tweet: " + tweets[randTweet].text);
	}
});

//response.end();