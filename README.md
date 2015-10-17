# LostMie

Mie is lost, need to send alert to every one

A proxy for alert information, use incoming webhook to post error to `LostMie` and it will send alert to developers using the following methods

- browser: websocket
- mobile device: third party push provider
- email: smtp 
- sms 

It won't send tons of messages during the midnight if your server is throwing error every second, but it will keep you awake unless you fix the problem or shut down the alert service itself.

## Develop

- install nodejs and npm on your system, recommend using nvm
- `npm install`
- `node server.js` or use `pm2` to run it in background
