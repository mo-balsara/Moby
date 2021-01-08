const Discord = require('discord.js');

module.exports = {
	name: 'femboy me daddy UwU',
  hidden: true,
	description: '',
	execute(message, args) {
      let embed3 = new Discord.MessageEmbed()
        .setTitle("no you demented burnt lentil")
        .setDescription("hehe luv ya :D\nthis is the secret command :)")
        .setColor("ORANGE")
        .setFooter(`Moby`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
      message.channel.send(embed3)
	},
};