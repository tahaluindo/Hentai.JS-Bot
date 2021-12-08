//NS Package
const { MessageEmbed } = require("discord.js");
const akaneko = require('akaneko');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "anime-blowjob",
    description: "Menampilkan Hanime bergenre blowjob",
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
      
      let HanimeBLOWJOB = new MessageEmbed()
      .setImage(await akaneko.nsfw.blowjob())
      .setColor(ns.color)
      return message.channel.send(
          {
              embeds: [HanimeBLOWJOB]
          }
      );
        
        }
    },
};