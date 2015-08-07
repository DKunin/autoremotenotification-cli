## Description
Simple cli for using with autoremotenotification module


## Usage
      
      node index.js --title Title --text Textmessage
      node index.js -t Title -m Textmessage

Or after setting up link
      
      aure --title Title --text Textmessage
      aure -t Title -m Textmessage

AUTOREMOTE_PHONE_DEVICE_KEY environment variable should be set, for messages to work properly,оr you can use the key inline like:
      
      aure --title Title --text Textmessage --key YOUR_API_KEY