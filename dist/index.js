"use strict";var _electron = require('electron');

function createWindow() {
	const window = new (0, _electron.BrowserWindow)({
		width: 800,
    	height: 600
	})
	window.loadFile('views/main.html')
}

_electron.app.whenReady().then(() => {
	console.log('Em execução...')
	createWindow()
})