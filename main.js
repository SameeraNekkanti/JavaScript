const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'favicon.ico',
        webPreferences: {
            nodeIntegration: true,
            autoplayPolicy: "no-user-gesture-required"
        }
    });

    win.loadFile('cafe.html');
}

app.whenReady().then(createWindow);