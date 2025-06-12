const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Builder } = require("selenium-webdriver");
const chromedriverPath = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const { login } = require("C:\\Users\\GlophicsQA\\Desktop\\SeleniumTest\\components\\Login.js");
const { selectDieCutOptions } = require("C:\\Users\\GlophicsQA\\Desktop\\SeleniumTest\\components\\Stickers\\PaperBased\\ArtPaper\\DieCut.js");
const { uploadFile } = require("./components/UploadFile");

const SINGAPRINTING_URL = "https://www.singaprinting.com/";

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile('index.html');
}

function sendLog(message) {
    if (mainWindow) {
        mainWindow.webContents.send('automation-log', message);
    }
}

app.whenReady().then(createWindow);

ipcMain.on('start-automation', async (event) => {
    sendLog("Starting automation...");
    
    await runAutomation();
   
    event.reply('automation-finished', 'Automation completed!');
    
});

async function runAutomation() {
    // Explicitly set the ChromeDriver path
  const service = new chrome.ServiceBuilder(chromedriverPath);
    const options = new chrome.Options();

    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .setChromeService(service)
        .build();

    try {
        sendLog("Opening website...");
        await driver.get(SINGAPRINTING_URL);
        await driver.manage().window().maximize();
        sendLog("Logging in...");
        await login(driver, "trainee85.glophics@gmail.com", "ephemeral123!?");
        sendLog("Selecting Die Cut options...");
        await selectDieCutOptions(driver, true, "Die Cut", "Square", "Gloss", "Normal", 100);
        sendLog("Uploading file...");
        await uploadFile(driver);
        sendLog("All steps completed.");
    } catch (error) {
        sendLog("Test failed: " + error);
    } finally {
        // await driver.quit();
    }
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});