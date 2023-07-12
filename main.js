const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require('./commands/${file}');

client.commands.set(command.name, command);
}

client.on('ready', () => {
  cosnole.log('Fish Bombing!');
}};

client.on('message', message => {

          if(!message.content.startsWith(prefix) || message.author.bot) return;

          const args = message.content.slide(prefix.length).split(/ +/);
          const command = args.shift().toLowercase();

          if(command === 'command'){

  client.commands.get('command').execute(message, args, Discord);
          }
}};

client.login.('MTEyNzc1NDMyNzE2MzkzNjkwOQ.G67SDP.HkdnM7A1OZNTxfd1sy3RqE__-eRHkXLcTDR_7g');
