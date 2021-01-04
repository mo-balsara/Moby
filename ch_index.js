require('./server');

const { token } = process.env;

const fetch = require('node-fetch');
const Discord = require('discord.js');

const client = new Discord.Client();

const Prefix = ';';

const moment = require('moment-timezone');

const got = require("got");

const mongo = require("mongodb");
const {
    Sequelize,
    DataTypes
} = require('sequelize');


const fs = require("fs");

const version = "1.0.0";

client.commands = new Discord.Collection();

function command(command) {
  return `${Prefix}${command}`
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(';cmds | v1.0.1', { type: 'LISTENING' })
});

client.on('message', message => {
  	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  
  switch (message.content) {
    case command('cmds'):
      let dateTime2 = message.createdAt
      let d2 = moment(dateTime2);
      let time2 = d2.tz("America/Chicago").format("LT");
      let embed2 = new Discord.MessageEmbed()
        .setTitle("Here are a list of commands!")
        .setDescription(">>> ```;avatar```\n```;invite```\n```;meme```\n```;owner```\n```;devs```\n```;support```")
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time2}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed2)
      break;
    
    case command('support'):
      let dateTimeSup = message.createdAt
      let dSup = moment(dateTimeSup);
      let timeSup = dSup.tz("America/Chicago").format("LT");
      let embedSup = new Discord.MessageEmbed()
        .setTitle("Moby's Support Server!")
        .setDescription("Click on the link to join Moby's support server today! [Link](https://discord.gg/7zUD9vkDzN)")
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${timeSup}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embedSup)
      break;

    case command('femboy me daddy UwU'):
      let dateTime3 = message.createdAt
      let d3 = moment(dateTime3);
      let time3 = d3.tz("America/Chicago").format("LT");
      let embed3 = new Discord.MessageEmbed()
        .setTitle("no you demented burnt lentil")
        .setDescription("hehe luv ya :D\nthis is the secret command :)")
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time3}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed3)
      break;

    case command('owner'):
      let dateTime6 = message.createdAt
      let d6 = moment(dateTime6);
      let time6 = d6.tz("America/Chicago").format("LT");
      let embed6 = new Discord.MessageEmbed()
        .setTitle("Who owns me?")
        .setDescription("head;#8429")
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time6}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed6)
      break;

    case command('devs'):
      let dateTime7 = message.createdAt
      let d7 = moment(dateTime7);
      let time7 = d7.tz("America/Chicago").format("LT");
      let embed7 = new Discord.MessageEmbed()
        .setTitle("Heres a list of the devs!")
        .setDescription("-_-#9799")
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time7}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed7)
      break;

    case command('avatar'):
      let dateTime4 = message.createdAt
      let d4 = moment(dateTime4);
      let time4 = d4.tz("America/Chicago").format("LT");
      let embed4 = new Discord.MessageEmbed()
        .setTitle("Heres your avatar!")
        .setImage(message.author.displayAvatarURL({ dyanmic: true, format: 'png', size: 512 }))
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time4}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed4)
      break;
    
    case command('invite'):
      let dateTime5 = message.createdAt
      let d5 = moment(dateTime5);
      let time5 = d5.tz("America/Chicago").format("LT");
      let embed5 = new Discord.MessageEmbed()
        .setTitle("Invite Moby to your Server!")
        .setDescription('Use this link to invite Moby to your servers! [Link](https://discord.com/oauth2/authorize?client_id=784210441622650920&scope=bot)')
        .addField(`Version: 1.0.1`)
        .setColor("ORANGE")
        .setFooter(`Moby • Today at ${time5}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed5)
      break;

    case command('kick'):
      const kickMember = message.mentions.members.first()
      kickMember.kick();
      break;

    case command('meme'):
      let memeembed = new Discord.MessageEmbed()
      got("https://www.reddit.com/r/dankmemes/random/.json").then(response => {

        let dateTime = message.createdAt
        let d = moment(`${dateTime}`)
        let time = d.tz("America/Chicago").format("LT");
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink};`
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        let memeSubreddit = content[0].data.children[0].data.subreddit;
        memeembed.setTitle(`${memeTitle}`);
        memeembed.setDescription(`r/${memeSubreddit}`)
        memeembed.setURL(`${memeUrl}`);
        memeembed.setImage(memeImage);
        memeembed.setColor("ORANGE");
        memeembed.setFooter(`Moby • Today at ${time}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }));
        message.channel.send(memeembed);
      });
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Howdy ${member}! Welcome to the server.`);
});

client.login(token);