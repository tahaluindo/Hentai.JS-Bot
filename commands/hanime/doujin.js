//NS Package
const { MessageEmbed } = require("discord.js");
const akaneko = require('akaneko');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "doujin",
    description: "Menampilkan Doujin",
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
      
      let Doujin = new MessageEmbed()
      .setImage(await akaneko.nsfw.doujin())
      .setColor(ns.color)
      return message.channel.send(
          {
              embeds: [Doujin]
          }
      );
        
        }
    },
};