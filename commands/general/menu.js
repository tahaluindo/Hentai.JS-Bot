//NS Package
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require('fs');

//NS Settings
const ns = require("../../assets/json/nsembed.json");
const nsmoji = require("../../assets/json/nsmoji/nsmoji.json");

module.exports = {
    name: 'menu',
    aliases: ['botmenu','menubot'],
    description: 'Untuk menunjukan menu Neko Senpai',
    hidden: true,
    run: async (client, message, args) => {

        if (!args[0]) {

            //kategori
            let categories = [];

            //emoji kategori
            let NSmoji = {
                hanime: nsmoji.ansfw,
                nsfw: nsmoji.nsfw,
                general: nsmoji.aksi,
            };

            //menghilangkan kategori
            const ignoredCategories = ["chargenshin"];
      
            //membaca file
            readdirSync("./commands/").forEach((dir) => {

                const editedNS = `${NSmoji[dir]} ${dir.toUpperCase()}`

              if (ignoredCategories.includes(dir)) return;
              const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                file.endsWith(".js")
              );
      
              const cmds = commands.filter((command) => {
                let file = require(`../../commands/${dir}/${command}`);
      
                //file disembunyikan harus ditambahkan (hidden: true)
                return !file.hidden;
      
              }).map((command) => {
                let file = require(`../../commands/${dir}/${command}`);
      
                //kalo cmd tidak sesuai dengan nama
                if (!file.name) return "-";
      
                let name = file.name.replace(".js", "");
      
                return `\`${name}\` | `;
              });
      
              //kalo foldernya doank tanpa file (khusus commands folder)
              let data = new Object();
      
              data = {
                name: editedNS,
                value: cmds.length === 0 ? "-" : cmds.join(" "),
              };
      
              categories.push(data);
            });

            //embed buat menu
            const menuoverlay = new MessageEmbed()
              .setAuthor('Menu Senpai hari ini', client.user.displayAvatarURL())
              .setThumbnail(ns.icon)
              .addFields(categories)
              .setTimestamp()
              .setColor(ns.color);
            return message.channel.send(
                {
                    embeds: [menuoverlay]
                }
            );

          } else {
            
            //kalo cmdnya gk ada
            const command =
              client.commands.get(args[0].toLowerCase()) ||
              client.commands.find(
                (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
              );
      
            if (!command) {

              return message.reply(
                  `B-baka >//< , jangan yang aneh aneh okay -_^`
              );

            }

            //detail cmd
            const detailcmd = new MessageEmbed()
              .setAuthor("Bantuan Senpai", client.user.displayAvatarURL())
              .addField(
                "Nama Perintah",
                command.name ? `\`${command.name}\`` : "-", true
              )
              .addField(
                "Cara Pakai",
                command.usage
                  ? `\`${prefix}${command.name} ${command.usage}\``
                  : `\`${prefix}${command.name}\``, true
              )
              .addField(
                  "Kata Ganti",
                  command.aliases
                    ? `\`${command.aliases.join("` `")}\``
                    : "-"
                )
              .addField(
                "Deskripsi",
                command.description
                  ? command.description
                  : "-", true
              )
              .setTimestamp()
              .setThumbnail(ns.icon)
              .setColor(ns.color);
            return message.channel.send(
                {
                    embeds: [detailcmd]
                }
            );
          }

    },
};