//NS Package
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
        name: 'cum',
        description: 'Menampilkan nsfw bergenre cum',
        cooldown: 5000,
        run: async (client, message, args) => {

            if(!message.channel.nsfw) {
                return message.reply(
                    `B-bakaa >//<, jangan disini!`
                )
        }

      try {

        var subreddits = [
            'buttloads',
            'CumOnAss',
            'bodyshots',
            'cumsluts'
          ]

        var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
      
        const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

        if (!data) return message.channel.send(`Error`);
      
        const { title, postLink, url, subreddit } = data

        const CumEmbed = new MessageEmbed()
            .setColor(ns.color)
            .setURL(postLink)
            .setImage(url)

        return message.channel.send(
            {
                embeds: [CumEmbed]
            }
        )

      } catch(error) {
        this.client.emit("apiError", error, message);
      }
    }
};