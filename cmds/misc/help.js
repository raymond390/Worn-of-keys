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
.setTitle('Help')
.setFooter('This is a footer')
.setColor('#00AAFF')
.addFields(
  {
    name: 'Among US',
    value: 'Gebruik !au regio game code',
    inline: true,
  },
  {
    name: 'fasttype',
    value: 'gebuik !fasttype om te kijken hoe snel jij kan typen',
    inline: true,
  },
  {
    name: 'covid',
    value: 'Gebruik !covid om te kijken naar de statistieken van Covid',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'nickname',
    value: 'Verander je gebruikers naam',
    inline: true,
  },
  {
    name: 'serverinfo',
    value: 'Geeft statistieken over de server',
    inline: true,
  },
  {
    name: 'user info',
    value: '!userinfo <@speler> geeft statistieken over een persoon',
    inline: true,
  },
  {
    name: 'ismuted',
    value: 'bekijk of de persoon is gemuted',
    inline: true,
  },
  {
    name: 'kick',
    value: 'kickt iemand uit de discord',
    inline: true,
  },
  {
    name: 'mute',
    value: '!_mute <@persoon> zo mute je een persoon',
    inline: true,
  },
  {
    name: 'unmute',
    value: 'zo unmute je een persoon',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },
  {
    name: 'docs',
    value: 'bekijk de discordjs pagina',
    inline: true,
  },

  
  
)

message.channel.send(embed)
  }
  }