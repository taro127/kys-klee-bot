module.exports = {
  name: 'command',
  description: "Embeds!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#FFA0A0')
    .setTitle('Test')
    .setDescription('pebis')
    .addFields(
      {name: 'deez nuts', value: 'meow'},
      {name: 'deez nuts', value: 'meow'},
      {name: 'deez nuts', value: 'meow'}
      )
    .setImage('https://images-ext-1.discordapp.net/external/tnwPYA6Az2wcEwfzu7YbuUQYxQbVxKQTIAmqbXDoKAg/%3Fsize%3D512/https/cdn.discordapp.com/splashes/1117771689309257879/903a17d8f6bd2f94a0f00d49cb3fb5bb.jpg?width=819&height=819')
    .setFooter('test');

    message.channel.send(newEmbed);
  }
}
