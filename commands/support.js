const Discord = require('discord.js')

module.exports = {
	name: 'support',
	description: 'Get the support server invite link!',
	execute(message, args) {
		let embedSup = new Discord.MessageEmbed()
      .setTitle("Moby's Support Server!")
      .setDescription("Click on the link to join Moby's support server today! [Link](https://discord.gg/7zUD9vkDzN)")
      .setColor("ORANGE")
      .setFooter(`Moby • Today at ${timeSup}`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 32 }))
    message.channel.send(embedSup)
	},
};