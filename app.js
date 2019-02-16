var telegramBot = require('node-telegram-bot-api');
var token ='622184075:AAFeqRRPVOzjs9pRdFH1ghxarImyXQDGPm0';
var api = new telegramBot(token, {polling: true});

api.onText(/\/help/, function(msg, match) {
var fromId = msg.from.id;
api.sendMessage(fromId, "I can help you in getting the sentiments of any text you send to me.");
});

api.onText(/\/start/, function(msg, match) {
var fromId = msg.from.id;
api.sendMessage(fromId,
"I can help you in getting the sentiments of any text you send to me."+
"To help you i just have few commands.\n/help\n/start\n/calculator");
});
console.log("the Bot has started. Start conversations in your Telegram.");

api.onText(/\/calculator/, function(msg, match) {
var fromId = msg.from.id;
var keyboard = [
				['1', '2', '3'],
				['4','5', '6']
];
console.log(fromId);
api.sendMessage(fromId, "add substact divide multiply ");
//var replymarkup = api.replyKeyboardMarkup(keyboard, 'true', 'true');
var option = {
	"parse_mode":"Markdown",
	"reply_markup":{
		"keyboard" : keyboard
	}
};
api.sendMessage(fromId, "next ", option);
});








// send notifications ===
// curl --data chat_id="696024268" --data "text=Hey!, testing notifications majha bot notifications pan send karto" "https://api.telegram.org/bot622184075:AAFeqRRPVOzjs9pRdFH1ghxarImyXQDGPm0/sendMessage"

// 696024268
// 662468461