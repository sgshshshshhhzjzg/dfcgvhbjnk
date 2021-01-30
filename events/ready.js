const chalk = require("chalk");

const moment = require("moment");

const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);

  client.user.setPresence({
    game: {
      name: ` helo `,

      type: "Playing Crew ❤️" //WATCHING - İZLİYOR LISTINING - DİNLİYOR
    },

    status: "online" //online - Çevrimiçi idle - Boşta
  });
};
