const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class UserInfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'help',
      group: 'misc',
      memberName: 'help',
      description: 'Displays information a user',
    })
  }
  run = async (message) => {
    const { guild, channel } = messag

const embed = new MessageEmbed()
.setTitle('Example text embed')
.setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
.setAuthor(message.author.username)
.setImage(logo)
.setThumbnail(logo)
.setFooter('This is a footer')
.setColor('#00AAFF')
.addFields(
  {
    name: 'Field 1',
    value: 'Hello world',
    inline: true,
  },
  {
    name: 'Field 2',
    value: 'Hello world',
    inline: true,
  },
  {
    name: 'Field 3',
    value: 'Hello world',
    inline: true,
  },
  {
    name: 'Field 4',
    value: 'Hello world',
  }
)

message.channel.send(embed)
  }
  }