const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 
  
const embed = new Discord.RichEmbed()
.setTitle(client.emojis.get("649690639054798848") + " » " + message.guild.name + " | Sunucu Ayarları «")
.setColor("BLUE")
.addField(`${db.has(`küfürE_${message.channel.id}`) ? `${client.emojis.get("685749333228126229")} Küfür` : `${client.emojis.get("685749385321119744")} Küfür `}`)
.addField(`${db.has(`reklamK_${message.channel.id}`) ? `${client.emojis.get("685749333228126229")} Reklam` : `${client.emojis.get("685749385321119744")} Reklam `}`)
.addField(`${db.has(`linkKR_${message.guild.id}`) ? `${client.emojis.get("685749333228126229")} Reklam Kick` : `${client.emojis.get("685749385321119744")} Reklam Kick`}`)
.addField(`${db.has(`linkK_${message.channel.id}`) ? `${client.emojis.get("685749333228126229")} Link Engel` : `${client.emojis.get("685749385321119744")} Link Engel`}`)
.addField(`${db.has(`linkK_${message.channel.id}`) ? `${client.emojis.get("685749333228126229")} Link Engel` : `${client.emojis.get("685749385321119744")} Link Engel`}`)
.addField(`${client.emojis.get("685749333228126229")} Saldırı Koruma`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['ayarlar'], 
  permLevel: 0
};

exports.help = {
  name: 'settings',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};