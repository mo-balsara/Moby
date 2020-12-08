const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(6969, function() {
	console.log('You are listening to port 6969!')
});