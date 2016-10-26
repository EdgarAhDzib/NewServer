var http = require('http');
var tweet = require('twitter');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	response.end("It worked! Path: " + request.url);
}

var server = http.createServer(handleRequest);

var niceThings = ["Your career is about to launch!","Happy Days of the Dead!","The soundtrack kicks butt!"];
var badThings = ["Your church makes me vomit!","Your costume direly needs accessories!","Get your clothes out of the suitcase already!"];
var rand1 = Math.floor(Math.random() * niceThings.length);
var rand2 = Math.floor(Math.random() * badThings.length);

server.listen(PORT1, function(){
	console.log(niceThings[rand1]);
});

server.listen(PORT2, function(){
	console.log(badThings[rand2]);
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