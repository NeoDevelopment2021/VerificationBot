const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`You have been verified!`, true)
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('ready', () => {
    console.log('Bot Is Online')
})

client.on('message', async (message) => {
    if (message.content.startsWith('!verify')) {
        const embed = new MessageEmbed()
            .setTitle('Verification')
            .setColor("GREEN")
            .setDescription('Click on the button below to verify!')
            .setFooter('Verification Code is Coded by Neo Development')
.setImage("https://cdn.dribbble.com/users/1798568/screenshots/11956736/media/41eaeb332b7d4e024888cbf20ec8ae93.gif")
        const add = new MessageButton()
            .setStyle("green")
            .setLabel("✅Verify!")
            .setID("AddVerifiedRole")

        const row = new MessageActionRow()
            .addComponent([add])


        message.channel.send({ component: row, embed: embed })
    }
})
keepAlive();
client.login(process.env.TOKEN);


/**
 * @INFO
 * Bot Coded by G O D G A M E R#6964 | 
 * @INFO
 * Working for Neo Development
 * @INFO
 * Please mention Him in Neo Development, when using this Code!
 * @INFO
 * Discord Server[https://discord.gg/wBXesEygK6]
 */