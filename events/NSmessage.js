const client = require("../index");

//NS Package
const ms = require('ms')
const { MessageEmbed, Collection } = require("discord.js");

//Cooldown
const Timeout = new Collection()

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.ns.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.ns.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase());

    if (command) {
        if(command.cooldown) {
            if(Timeout.has(
                `${command.name}${message.author.id}`
            )) return message.channel.send(
                `Tunggu \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` lagi untuk melihat Hentai`
            )
            command.run(client, message, args)
            Timeout.set(
                `${command.name}${message.author.id}`, Date.now() + command.cooldown
            )
            setTimeout(() => {
                Timeout.delete(
                    `${command.name}${message.author.id}`
                )
            }, command.cooldown)
        } else command.run(client, message, args);
    }
});
