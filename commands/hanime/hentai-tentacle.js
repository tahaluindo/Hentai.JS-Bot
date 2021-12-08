//NS Package
const { MessageEmbed } = require("discord.js");
const akaneko = require('akaneko');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "hentai-tentacle",
    description: "Menampilkan Hentai bergenre tentacle",
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
      
      let Hentaigurita = new MessageEmbed()
      .setImage(await akaneko.nsfw.tentacles())
      .setColor(ns.color)
      return message.channel.send(
          {
              embeds: [Hentaigurita]
          }
      );
        
        }
    },
};