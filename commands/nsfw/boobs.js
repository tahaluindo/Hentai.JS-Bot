//NS Package
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

//NS Settings
const ns = require("../../assets/json/nsembed.json");

module.exports = {
        name: 'boobs',
        description: 'Menampilkan nsfw bergenre Boobs',
        cooldown: 5000,
        run: async (client, message, args) => {

            if(!message.channel.nsfw) {
                return message.reply(
                    `B-bakaa >//<, jangan disini!`
                )
        }

      try {

        var subreddits = [
            'boobs',
            'Boobies',
            'Stacked',
            'BustyPetite',
            'Cleavage',
            'bustyasians',
            'boltedontits',
            'burstingout'
          ]

        var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
      
        const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

        if (!data) return message.channel.send(`Error`);
      
        const { title, postLink, url, subreddit } = data

        const BoobsEmbed = new MessageEmbed()
            .setColor(ns.color)
            .setURL(postLink)
            .setImage(url)

        return message.channel.send(
            {
                embeds: [BoobsEmbed]
            }
        )

      } catch(error) {
        this.client.emit("apiError", error, message);
      }
    }
};