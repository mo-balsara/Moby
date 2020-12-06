//store the webserver stuff here, as it is otherwise going to confuse you. Just require this file


const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(6969, function() {
	console.log('You are listening to port 6969!')
});