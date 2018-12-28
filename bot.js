const Discord = require('discord.js');
const client = new Discord.Client
const prefix = '!&'

client.on('ready', () => {
  console.log(`I'm ready with ${client.user.tag}!`);
});
  
  
  
  
  
  client.login(process.env.BOT_TOKEN);
