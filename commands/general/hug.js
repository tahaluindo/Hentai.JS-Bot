//Sumber:https://tenor.com/view/anime-hug-manga-cuddle-japan-gif-10522729

//NS Package
const { MessageEmbed } = require('discord.js');

//NS Setting
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "hug",
    aliases: ['peluk','animehug'],
    description: "Memeluk seseorang",
    usage: "<anggota>",
    run: async(client, message, args) => {

        //biar lebih singkat
        const pengetik = message.author;
        const target = message.mentions.members.first()

        //kalo gk ada target
        if(!target) return message.reply(
            `Kamu mau meluk siapa sihh, kayak punya pacar aja`
        )

        //gifnya
        const peluk = [
            `https://i.pinimg.com/originals/10/8c/22/108c2257683620292f4687262f26e872.gif`,
            `http://25.media.tumblr.com/a4642f0cd5d56c054f6a0fda50a95da5/tumblr_mtonifUecT1sn2uyvo1_500.gif`,
            `https://cdn.weeb.sh/images/B10Tfknqf.gif`,
            `https://cdn.weeb.sh/images/BkBs2uk_b.gif`,
            `https://cdn.weeb.sh/images/r1v2_uXP-.gif`,
            `https://cdn.weeb.sh/images/H1X6OOmPW.gif`,
            `https://cdn.weeb.sh/images/Sy65_OQvZ.gif`,
            `https://cdn.weeb.sh/images/Sk-xxs3C-.gif`,
            `https://cdn.weeb.sh/images/BJx2l0ttW.gif`,
            `https://cdn.weeb.sh/images/rJl3BcTuG.gif`
        ];


        //biar dpt gif random
        const pelukan = Math.floor(Math.random() * peluk.length)


        const wibumeluk = new MessageEmbed()
            .setDescription(`${pengetik} Memeluk ${target} 😊`)
            .setImage(peluk[pelukan])
            .setColor(ns.color)

        return message.channel.send(
            {
                embeds: [wibumeluk]
            }
        )
    },
};