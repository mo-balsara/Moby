require('./server');

const { token } = process.env;

const Discord = require('discord.js');

const client = new Discord.Client();

const Prefix = ';';

const moment = require('moment-timezone');

const got = require("got");


function command(command) {
	return `${Prefix}${command}`
}

client.on("ready", () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(';help | v1.0.1', { type: 'LISTENING'})
});



client.on('message', message => {
	switch(message.content) {
		case command('help'):
			message.channel.send('> ***My prefix is `;`!***\n > **Here are a list of commands:**\n> `;avatar`\n> `;invite`\n> `;meme`\n> `;owner`');
			break;

		case command('femboy me daddy UwU'):
			message.reply('no, you demented burnt lentil.');
			break;

		case command('owner'):
			message.reply('the owner is head;#8429');
			break;

		case command('invite'):
			message.channel.send('> **Moby\'s Server invite!**\n> https://discord.com/oauth2/authorize?client_id=784210441622650920&scope=bot'); case command('meme'):
		  break;

    case command('meme'):
    const date = message.createdTimestamp
    const botname = client.username
    const pfp = message.author.avatar
			const memeEmbed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let file = JSON.parse(response.body);
        let link = file[0].data.children[0].data.permalink;
        let url = `https://reddit.com${link};`
        let image = file[0].data.children[0].data.url;
        let dateTime = message.createdAt
        let d = moment(`${dateTime}`);
        let time = d.tz('America/Chicago').format('LT');
      let title = file[0].data.children[0].data.title;
      let upvotes = file[0].data.children[0].data.ups;
      let downvotes = file[0].data.children[0].data.downs;
      let comments = file[0].data.children[0].data.num_comments;
      let subreddit = file[0].data.children[0].data.subreddit;
      memeEmbed.setTitle(`${title}`)
      memeEmbed.setDescription(`r/${subreddit}`)
      memeEmbed.setURL(`${url}`);
      memeEmbed.setImage(image);
      memeEmbed.setColor("ORANGE")
       memeEmbed.setFooter(` Moby • Today at ${time}`,  client.user.avatarURL({ dynamic: true, format: 'png', size: 32}))
      message.channel.send(memeEmbed)
      }); 
			break;

    case command('avatar'):
      message.channel.send(message.author.displayAvatarURL());
    }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Howdy ${member}! Welcome to the server.`);
});

client.login(token);