const telegramBot = require('node-telegram-bot-api');
const { messageTypes } = require('node-telegram-bot-api/src/telegram');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, {polling:true});

bot.on('message', (message) =>
{
  let chat_id = message.from.id;
    let first_name;
    let temp;
     let last_name;
     let email;
    let Education;
    let dummy;
    

    if(typeof(first_name) === undefined)
    {
      temp = message.text
      bot.sendMessage(chat_id,`${temp}, Enter first_name`)
      
        first_name = message.text;
        console.log(`first_name ${first_name}`)
     
    }
    else if(typeof(first_name) !== undefined)
    {
      bot.sendMessage(chat_id,`${temp} ${first_name} Enter last_name`)
      last_name = message.text
      console.log(`last_name ${last_name}`)
    }

    // else if(temp != "")
    // {
      
    //   bot.sendMessage(chat_id,`what is your LastName`)
    //   last_name = message.text;
    //   console.log(`Last name ${last_name}`)
      
      
    // }
    // else if(last_name != "")
    // {
    //   bot.sendMessage(chat_id,`what is your email`)
    //   email = message.text;
    //   console.log(`LastName ${last_name}`)
    // }
    

  //   let fname = message.from.first_name;

  

   

    // bot.sendMessage(chat_id, `Hello from ${fname}.`);
    // bot.sendPhoto(chat_id, 'images/14.jpg');
    // bot.sendPoll(chat_id,"where is capital of US",['washington DC','Alaska','Mexico City']);
    // bot.sendVenue(chat_id,"36.778259","-119.417931","Marriage","4th Avenue");
   
});


  
  


