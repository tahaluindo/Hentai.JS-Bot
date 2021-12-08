//NS Client
const { Client, 
        Intents, 
        Collection
} = require('discord.js');

const client = new Client(
    {
        intents: 32767,
    }
);
module.exports = client;

//NS Variables
client.commands = new Collection();
client.ns = require("./assets/json/nsconfig.json")

//NS Handler
require("./handler")(client)

//NS Settings
const NSPassword = client.ns.NS_TOKEN
client.login(NSPassword);