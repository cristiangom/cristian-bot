console.log('El bot está listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'hola'){
            message.channel.sendMessage('Hola! :D');
    }
    if (message.content == 'muestrate'){       
            message.channel.sendMessage('https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png');           
    }
    if (message.content == '.valor'){
            message.channel.sendMessage('no funciona jaja');
            message.member.addRole('Valor'); 
    }
    if (message.content == 'adios'){
            message.channel.sendMessage('Bye');
    }
    if (message.content == 'prueba'){
            message.channel.sendMessage('discord');
    }
});

bot.login(process.env.BOT_TOKEN);


