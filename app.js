const SlackBot = require('slackbots');
const config = require('config');

function postToStatusChannel(bot, message, options){
  const o = options || {};
  if(config.statusChannelName){
    bot.postMessageToChannel(config.statusChannelName, message, options);
  }
}

const bot = new SlackBot({
    token: config.token,
    name: 'thanks to leave'
});

bot.on('start', function() {
  const message = `bot connected at ${new Date()}`;
  console.log(message);
  postToStatusChannel(bot, message);
});

bot.on('message', async (e)=>{
  if( e.type === 'message' && e.subtype === 'channel_leave' ){
    console.log(`${new Date()} channel_leave detected`);
    try{
      // slackbotsにgetChannelsByIDが存在しないので、
      // getChannel(name) の実装を参考に処理を書いてしまう
      const channels = (await bot.getChannels()).channels || [];
      const channel = channels.find( c => c.id === e.channel );
      bot.postMessageToUser(e.user_profile.name, `#${channel.name} のご対応ありがとうございました！`);
    }catch(e){
      // とりあえずconsole.logとslackにPOSTしておく
      console.error(`${new Date()} : ERROR at channel leave event handler`);
      console.error(e);
      postToStatusChannel(bot, `エラーが発生しました\n${e.stack || e}`);
    }
  }
});
