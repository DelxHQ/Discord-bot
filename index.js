var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));

var webhook = process.env.DISCORD_WEBHOOK;


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});


var content = "Congrats, You created a bot using POST requests"
var username = "MyBot"
var avatar = ""
app.post('/webhook', (req, res) => {
	request({
		method: 'POST',
		url: "https://discordapp.com/api/webhooks/303712840890580993/z7_rNrPJzLnpKF3QZhJ3Qp7ghRWBNLEyUkEuLsrOIfahSRWqh0OXokw2m7hvRhqhzTWP",
		json: {
			"content": content,
			"username": username,
			"avatar_url": avatar
		}
	});
	
	res.redirect('/webhook');
});

app.listen(80, () => {
	console.log('BOT Running');
});