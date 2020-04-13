const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://cdn.discordapp.com/attachments/647388568419041283/649244993545961484/yilanbenimm.png`, (err, image) => {
    image.resize(223, 400)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(121, 121)
        image.composite(avatar, 55, 44).write(`./resimler/yılanol/yılanol-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/yılanol/yılanol-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yılanol'], 
  permLevel: 0
};

exports.help = {
  name: 'yılan-ol',
  description: 'taslak', 
  usage: 'yılanol'
};