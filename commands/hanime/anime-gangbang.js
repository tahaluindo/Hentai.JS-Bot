//NS Package
const { MessageEmbed } = require("discord.js");
const akaneko = require('akaneko');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "anime-gangbang",
    description: "Menampilkan Hanime bergenre gangbang",
    cooldown: 5000,
      /**
       * @param {Client} client
       * @param {Message} message
       * @param {String[]} args
       */
    run: async (client, message, args) => {

      if(!message.channel.nsfw) {

        return message.reply(
            `B-bakaa >//<, jangan disini!`
        );
        
      } else {
      
      let HanimeGB = new MessageEmbed()
      .setImage(await akaneko.nsfw.gangbang())
      .setColor(ns.color)
      return message.channel.send(
          {
              embeds: [HanimeGB]
          }
      );
        
        }
    },
};