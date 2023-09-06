import {app, BrowserWindow} from 'electron'

function createWindow() {
	const window = new BrowserWindow({
		width: 800,
    	height: 600
	})
	window.loadFile('views/main.html')
}

app.whenReady().then(() => {
	createWindow()
})