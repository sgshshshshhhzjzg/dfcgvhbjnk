const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
}
  db.delete(`utsK_${message.channel.id+message.guild.id}`)
  message.reply(`**Sadece bu sohbet kanalında** tüm botların mesajları silinmeyecek. ${client.emojis.get("647746144155467786")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otobotsilicikapat',
  description: 'sayaç', 
  usage: 'sayaç'
};
