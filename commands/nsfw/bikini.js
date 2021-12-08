//NS Package
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
        name: 'bikini',
        description: 'Menampilkan nsfw bergenre Bikini',
        cooldown: 5000,
        run: async (client, message, args) => {

            if(!message.channel.nsfw) {
                return message.reply(
                    `B-bakaa >//<, jangan disini!`
                )
        }

      try {

        var subreddits = [
            'bikinis',
            'bikinibodies'
          ]

        var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
      
        const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

        if (!data) return message.channel.send(`Error`);
      
        const { title, postLink, url, subreddit } = data

        const BikiniEmbed = new MessageEmbed()
            .setColor(ns.color)
            .setURL(postLink)
            .setImage(url)

        return message.channel.send(
            {
                embeds: [BikiniEmbed]
            }
        )

      } catch(error) {
        this.client.emit("apiError", error, message);
      }
    }
};