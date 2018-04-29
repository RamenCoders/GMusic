const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 1024, height: 800}) 
   win.loadURL(url.format ({ 
      // pathname: path.join(__dirname, 'apps/index.html'), 
      protocol: 'web:',
      protocol: 'https://play.google.com/music/listen?u=0#', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 