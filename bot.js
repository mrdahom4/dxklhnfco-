const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





  
 client.on("ready", () => {
console.log('Code');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Programmer & Coder',
     details: `Mr DaHoM`,
     url: 'http://twitch.tv/M3roof',
     state: `Simo Network`,
    application_id: '377479790195769345',
     assets: {
        large_image: `377480353259978752`,
        large_text: `DaHoM` }

  }
    });
});

const devs = ['487727064192122880' , '' , '' , ''];
const adminprefix = "//";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });

  


client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("515275185314856964");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`** .# Welcome To Simo Network , :black_heart: **`);          
}
});

client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("514832735676923934");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`** .# Welcome To Codes Server , :black_heart: **`);          
}
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('```وعليكم السلام ورحمه الله وبركاته```');
  }
});

client.on("message", message => {
    if (message.content.startsWith(prefix + "bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:love_letter:  **عدد المستلمين** `);
  message.delete();
  };
  });

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('```ولكم حياك الله```');
  }
});




client.login(process.env.BOT_TOKEN);
