require('./server');

const { token } = process.env;

const Discord = require('discord.js');

const client = new Discord.Client();

const Prefix = '=';

function command(command) {
	return `${Prefix}${command}`
}

client.on('ready', _ => {
	console.log('Bot is ready!!!')
});

client.on('message', message => {
	switch(message.content) {
		case command('help'):
			message.channel.send('**Here are a list of commands:\n**> yourmomisgae' );
			break;

		case command('bruh'):
			message.reply('rip');
			break;
			
    case command('what is my avatar'):
      message.channel.send(message.author.displayAvatarURL());
    }
});

client.login(token);