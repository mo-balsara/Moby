const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp'],
  description: 'Returns a users avatar',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    if (!message.mentions.users.first()) {
      embed.setTitle("Your Avatar:")
      embed.setURL(message.author.displayAvatarURL())
      embed.setThumbnail(message.author.displayAvatarURL())
//      embed.setDescription("This is your avatar.")
      embed.setColor("ORANGE")
      return message.channel.send(embed)
    } else {
      const user = message.mentions.users.first()
      embed.setTitle(`${user.tag}'s Avatar:`)
      embed.setURL(user.displayAvatarURL())
      embed.setThumbnail(user.displayAvatarURL())
//      embed.setDescription(`This is ${user.tag}'s avatar.`)
      embed.setColor('ORANGE')
//      embed.setFooter("This is a test.")
      return message.channel.send(embed)
    }
  }
}
