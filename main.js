const electron = require('electron');
const {BrowserWindow , app} = electron;
const path = require('path')
const url = require('url')

require('electron-reload')(__dirname + 'dist/index.html' );


let win



function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  if(process.env.NODE_ENV === 'development'){
      win.loadURL("http://localhost:8080");
  } else if(process.env.NODE_ENV === 'production') {
      win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  }


 // win.webContents.openDevTools()

  win.on('closed', () => {
  
    win = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
 
  if (win === null) {
    createWindow()
  }
})