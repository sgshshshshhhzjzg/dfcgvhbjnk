const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  const duration = client.uptime
const embed = new Discord.RichEmbed()
.setAuthor("Racon", client.user.avatarURL)
.setTitle("Racon Davet")
.setURL("https://discordapp.com/oauth2/authorize?client_id=699035846900449300&scope=bot&permissions=805829694")
.setDescription("! Eren#1499 Tarafından hazırlanmıştır")
.setColor("BLUE")
.setTimestamp()
.setFooter("© Racon", client.user.avatarURL)
.addField("Kullanılan RAM miktarı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam RAM miktarı", `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam sunucu sayısı", `${client.guilds.size.toLocaleString()}`)
.addField("Bilgi", `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${client.users.size}, Üye! / Shard ID: **Yok!**

${duration / 60 / 60} dakika içinde,
**32,626** kullanılan kelime içerisinden :speech_balloon: 
**220** küfür engellendi :angry: 
**6** reklam engellendi :hammer:
[Bot Durumu](https://goo.gl/vJvz9g)
`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['botbilgi'], 
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};
