console.log('El bot está listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'hola'){
            message.channel.sendMessage('Hola! :D');
    }
    if (message.content == 'muestrate'){                      message.channel.sendMessage('https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png');
    }
});
bot.login('NDE2MTI2MjYwMDA4NDUyMDk2.DXAIpw.BJUGB6Mw1-ocMPWLOGAanRebMH4');


