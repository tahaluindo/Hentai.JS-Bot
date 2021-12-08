//Sumber:https://tenor.com/view/anime-hug-manga-cuddle-japan-gif-10522729

//NS Package
const { MessageEmbed } = require('discord.js');

//NS Setting
const ns = require("../../assets/json/nsembed.json");

module.exports = {
    name: "kiss",
    aliases: ['cium','animekiss'],
    description: "Mencium seseorang",
    usage: "<anggota>",
    run: async(client, message, args) => {

        //biar lebih singkat
        const pengetik = message.author;
        const target = message.mentions.members.first()

        //kalo gk ada target
        if(!target) return message.reply(
            `Kamu mau cium siapa sihh, kayak punya pacar aja`
        )

        //gifnya
        const cium = [
                `https://cdn.weeb.sh/images/BJLP3a_Pb.gif`,
                `https://cdn.weeb.sh/images/rkde2aODb.gif`,
                `https://cdn.weeb.sh/images/Sylj0s6dv-.jpeg`,
                `https://cdn.weeb.sh/images/SJ8I2Tuv-.gif`,
                `https://cdn.weeb.sh/images/rypMnpuvW.gif`,
                `https://cdn.weeb.sh/images/SkQIn6Ovb.gif`,
                `https://cdn.weeb.sh/images/HJ5khTOP-.gif`,
                `https://cdn.weeb.sh/images/Bkuk26uvb.gif`,
                `https://media.tenor.com/images/b9945cdd4e47d28be9f5ca94fd634031/tenor.gif`,
                `https://media.tenor.com/images/1db528b0c6a5de2c94fbd5339d73d384/tenor.gif`,
                `https://media.tenor.com/images/295cea7071909ccbaaa554510be2181f/tenor.gif`,
                `https://media.tenor.com/images/71e87a9f13f8daa8d04385263ae92d13/tenor.gif`
            ];


        //biar dpt gif random
        const ciuman = Math.floor(Math.random() * cium.length)


        const wibukiss = new MessageEmbed()
            .setDescription(`${pengetik} Mencium ${target} 🥰`)
            .setImage(cium[ciuman])
            .setColor(ns.color)

        return message.channel.send(
            {
                embeds: [wibukiss]
            }
        )
    },
};