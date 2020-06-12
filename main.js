console.log('Carregando...');
const botconfig = require("./botconfig.json");
const fetch = require('node-fetch');
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });
bot.commands = new Discord.Collection();


bot.on("ready", async () => {
    console.log(`${bot.user.username} está online em ${bot.guilds.size} servidores!`);

    function changing_status() {
        let status = [`by: @Biiell#2300`]
        let random = status[Math.floor(Math.random() * status.length)]
        bot.user.setActivity(random)
    }

    console.log('ca$h');
    setInterval(changing_status, 10000);
})


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    
    if(cmd == "!Biel"){
        message.delete();
         fetch("https://seu_site.000webhostapp.com/logs_users")
            .then(res => res.text())
            .then(body => message.channel.send(`Console **logs** (ProcessHacker, Flidder, TCPLogView...): \n${body}`))


    }
    if(cmd == "!apagarcache"){
        fetch("https://seu_site.000webhostapp.com/clearcache.php")
        message.channel.send("Cache are **cleaned**")
    }
});
bot.login(botconfig.token);