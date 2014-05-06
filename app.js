var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

app.get('/hi', function(req, res){
	res.send('You\'re now on the welcome page');
});

app.get('/bye', function(req,res){
	res.send('You\'re now on the good-bye page');
});

app.get('/stay', function(req,res){
	res.send('This is where you just hangout for a while');
});

app.get('/success', function(req, res){
	res.send('You have sucessfully submitted your form!');
});

app.get('/form', function(req, res){
	res.header('Content-Type','text/html');
	fs.readFile('index.html', function(err, data){
		res.send(data);
	});
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success');
});



var server = app.listen(8959, function() {
	console.log('Express server listening on port ' + server.address().port);
});
