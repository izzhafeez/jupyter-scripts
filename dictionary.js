var dictionaryToken = "1499740800:AAEm064MRQyTLFcJo5NwuR1gSdVzaaqHQ1k";
var dictionaryUrl = "https://api.telegram.org/bot" + dictionaryToken;

var chatId = 242141394;
var ssId = "1m9J0FYZtODqZkeSm_5zAvVQC3Lgj3s5FaFN_AzU8hFA";
var dictionary = SpreadsheetApp.openById(ssId).getSheetByName('Dictionary');
var webAppUrl = "https://script.google.com/macros/s/AKfycbwPkyMmCKKUFNyPobKmFetNPQvfWOLd5TzNftuNVqAx83yBAUkJCg4mRxgw1IsFBnr2/exec";

function dictionaryText(text) {
  var response = UrlFetchApp.fetch(dictionaryUrl + "/sendMessage?chat_id=" + chatId + "&text=" + text);
}

function setWebhook() {
  var url = dictionaryUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function deleteWebhook() {
  var url = dictionaryUrl + "/deleteWebhook";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Hello there");
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  text = data.message.text;
  Logger.log(text);

  dictionaryText(text);

  try {
    var language = text.split("  ")[0];
    var rest = text.split("  ")[1];
  } catch(e) {
    var language = "C";
    var rest = text;
  }

  var searches = rest.split(",");
  var newSearches = [];
  var counter = 0;
  while (counter < 5) {
    try {
      newSearches.push(searches[counter].trim());
    } catch(e) {
      newSearches.push("");
    }
    counter = counter + 1;
  }
  Logger.log(newSearches);

  for (i = 2; i < 7; i++) {
    var searchRange = dictionary.getRange("S" + String(i)).setValue(newSearches[i - 2]);
  }

  setTimeout(function(){Logger.log("Starting");}, 10000);

  if (language == "C") {
    var results = dictionary.getRange("A2").getDataRegion().getValues().slice(1,);
    var safety = 0;

    for (result of results) {
      if (safety < 5) {
        word = result[0];
        try{pinyin = ' ' + result[1];} catch(e) {pinyin = '';}
        try{usage = '%0A' + result[2];} catch(e) {usage = '';}
        try{level = ': ' + result[3];} catch(e) {usage = '';}

        dictionaryText(word + pinyin + level + usage);
        safety = safety + 1;
      } else {
        break;
      }
    }
  }
}

function test() {
  var newSearches = ["move","xyxy","xxxx","aa","b"];
  for (i = 2; i < 7; i++) {
    var searchRange = dictionary.getRange("S" + String(i)).setValue(newSearches[i - 2]);
  }
}

function aa(){
  Logger.log(text);
}
