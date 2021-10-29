const Discord = require('discord.js');
const client = new Discord.client();
var config = require('./config.json');
const token = config.token
const { getStatus } = require("mc-server-status")

client.on('ready', () => {
  console.log(`I'm online.`);
});

const status = await getStatus("172.104.161.161")
client.channels.cache.get('902824598423359488').send(status);
