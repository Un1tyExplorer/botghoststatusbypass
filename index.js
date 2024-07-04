
console.log('starting..')
//import modules 
const express = require('express');
const app = express();
const fs = require('fs')

console.log('=========================\nRead the readme.md file :D\nMade by CodeWith Yash\n=========================\n');
//dont delete please. I need clout


/* ///////////////////////////SOOOOOOOOOON/////////////////////
console.log('1. Choose Previous status\n2. Choose new status\nChoose \'1\' or \'2\'')
const kindstatus = prompt('Your answer ')
if (kindstatus = '1') {
  console.log('y')
}  else if (kindstatus = '2') {
  'joe'
}  else {
  die("\033[31mERROR. Choose 1 or 2")
};\
*//////////////////////////////////////////////////////////////////////

console.log("What status you want the bot to have?");
const statusbot = prompt('Enter status')
console.log('Loading')
//creating the webserver to keep it 24/7 online
app.get('/', (req, res) => {	res.send(`Read the readme.md file for more information on how to use this.\nThis bot is made for people who use botghost without premium to change the status. You can also use it for other reasons. It's just made so you can add any status to your discord bot. CURRENT STATUS: "${statusbot}"`);
});

app.listen(3000, () => {
	console.log('\033[32mWEBSERVER STARTED');
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});
//importing more modules
const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

//you can delete this if you want. I just made this so I can check if this repl is still online
client.on("messageCreate", message => {
  if(message.content === "!online") {
    message.channel.send("I am online!")
  }
})
//log in to the bot
client.login(process.env.TOKEN).catch((err) => {
  //warn you if the token is invalid
	console.warn("\033[31m Token Invalid")
})
console.clear()
client.on("ready", () => {
  console.log(`Logged in as: ${client.user.tag}\nGUILDS: ${client.guilds.cache.size}`);
//set the status 
  //UPDATE. You no longer have to edit the code to change the status. It is done in the console now.
  //old set status: client.user.setActivity(statusbot);
  client.user.setActivity(statusbot, { type: 'STREAMING' });
  console.log(`Status of the discord bot has succesfully changed to '${statusbot}'`)}
)
