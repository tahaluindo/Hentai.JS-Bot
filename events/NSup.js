const client = require("../index");

//NS Package
const ms = require('ms')
const { MessageEmbed, Collection } = require("discord.js");
const chalk = require('chalk');

client.on("ready", () => {

    console.log(chalk.magenta(`${client.user.username} ✅`))

    client.user.setActivity(
        `Pengocok Handal`, { 
            type: 'STREAMING'
        }
    )

})