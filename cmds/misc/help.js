const { MessageEmbed } = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class help extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'embed',
      group: 'misc',
      memberName: 'embed',
      description: 'Displays information a user',
    })
  }
  run = async (message) => {
    const { guild, channel } = message

const embed = new MessageEmbed()
.setTitle('Example text embed')
.setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
.setAuthor(message.author.username)
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