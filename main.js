const {app, BrowserWindow} = require('electron') // Module to control application life and create native browser window
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 1024, height: 800})

   // Below will need to be uncommented if you want to not have the Menu shown
   win.setMenu(null); 

   win.loadURL(url.format ({ 

   // Below will need to be uncommented if you want to not use the local file path and instead use web URL instead  
   //--> pathname: path.join(__dirname, 'apps/info.html'), 
   
      protocol: 'web:',
      protocol: 'https://play.google.com/music/listen?u=0#', 
      slashes: true
      
   })) 
}  

app.on('ready', createWindow)
