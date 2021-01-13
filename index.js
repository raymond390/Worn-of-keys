require('module-alias/register')

//const Discord = require('discord.js')
//const client = new Discord.Client()

const patch = require('path')
const Commando = require('discord.js-commando')
const loadCommands = require('@root/commands/load-commands')
const config = require('@root/config.json')
const command = require('@util/command')
const poll = require('@features/poll')
const mongo = require('@util/mongo')
const welcome = require('@features/welcome')
const messageCount = require('@features/message-counter')
const eval = require('@features/eval')
const path = require('path')
const fs = require('fs')
const antiAd = require('@features/anti-ad')
const inviteNotifications = require('@features/invite-notifications')
const scaling = require('@features/scaling-channels')
const economy = require('@features/economy')
const { loadLanguages } = require('@util/language')
const baseFile = 'command-base.js'
const commandBase = require(`@root/commands/${baseFile}`)


const client = new Commando.CommandoClient({
  owner: '590540346983710740',
  commandPrefix: config.prefix,
})

client.on('ready', () => {
  console.log('The client is ready!')

  client.registry
  .registerGroups([
    ['misc', 'misc commands'],
    ['moderation', 'moderation commands'],
    ['economy', 'Commands for the economy system'],
    ['games', 'Commands to handle games'],
    ['thanks', 'Commands to help thank people'],
    ['suggestions', 'Commands regarding suggestions'],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'cmds'))

  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })

  

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  

  
  poll(client)
  welcome(client)
  messageCount(client)
  eval(client)
  antiAd(client)
  inviteNotifications(client)
  scaling(client)
  economy(client)
  loadCommands(client)
 
   mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })


  

  
  
 
  command(client, 'ban', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been`)
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`)
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      )
    }
  })

    

  command(client, ['clear', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

  command(client, 'createtextchannel', (message) => {
    const name = message.content.replace('!createtextchannel ', '')

    message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        const categoryId = '757998148969824378'
        channel.setParent(categoryId)
      })
  })

  command(client, 'createvoicechannel', (message) => {
    const name = message.content.replace('!createvoicechannel ', '')

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = '757998148969824378'
        channel.setParent(categoryId)
        channel.setUserLimit(10)
      })
    })

  command(client, 'status', (message) => {
    const content = message.content.replace('!status ', '')
    // "!status hello world" -> "hello world"

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  })
})

client.login(process.env.token);