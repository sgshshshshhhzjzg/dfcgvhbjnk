const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {
  	if (!message.guild) return
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.RichEmbed()
  .setAuthor('STARK - AT BOT', client.user.avatarURL)
  .setTitle('STARK - AT BOT', client.user.avatarURL)
  .setURL("https://discord.gg/YyfNEf8")
  .setDescription("!sunucutanıt Kullandınız.")
  .addField('Sizin Sunucunuz Burada Tanıtıldı', `[Tıkla](https://discord.gg/YyfNEf8)`)
        .setTimestamp()
  .addField("Sizde sunucunuzu tanıtmak istiyorsanız.", "!davet yazarak beni sunucunuza ekleyebilirsiniz.")
  .setColor('BLUE')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()
      .setAuthor('STARK - AT BOT', client.user.avatarURL)
      .setTitle('STARK - AT', client.user.avatarURL)
      .setURL("https://discord.gg/YyfNEf8")
      .addField(` Sunucu Sahibi`, message.author.tag, true)
      .addField(` Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucudakı Üye Sayısı`, message.guild.members.size, true)
      .addField(` Sunucu Davet Linki`, invite.url, true)
            .setColor('BLUE')
        .setTimestamp()
      .setThumbnail(message.guild.iconURL)
       client.channels.get('678150780058075146').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.reply("Bu özelliği `(24)` Saat içinde yalnızca 1 kez kullanabilirsiniz")
  }
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucutanıt'],
    permLevel: 0,
}

exports.help = {
    name: 'sunucunutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}
