const Discord = require('discord.js');
const version = "v1.0.3"

module.exports = {
	name: 'invite',
	description: 'Get the invite link for the bot!',
	execute(message, args) {
      let embed5 = new Discord.MessageEmbed()
        .setTitle("Invite Moby to your Server!")
        .setDescription('Use this link to invite Moby to your servers! [Link](https://discord.com/oauth2/authorize?client_id=784210441622650920&permissions=8&scope=bot)')
        .addField(version)
        .setColor("ORANGE")
        .setFooter(`Moby`, message.client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed5)
	},
};