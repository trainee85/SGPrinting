const { Builder } = require("selenium-webdriver");
const chromedriverPath = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const { login } = require("C:\\Users\\GlophicsQA\\Desktop\\SeleniumTest\\components\\Login.js");
const { selectDieCutOptions } = require("C:\\Users\\GlophicsQA\\Desktop\\SeleniumTest\\components\\Stickers\\PaperBased\\ArtPaper\\DieCut.js");
const { uploadFile } = require("./components/UploadFile");

const SINGAPRINTING_URL = "https://www.singaprinting.com/";

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
        console.log("Opening website...");
        await driver.get(SINGAPRINTING_URL);
        await driver.manage().window().maximize();
        console.log("Logging in...");
        await login(driver, "trainee85.glophics@gmail.com", "ephemeral123!?");
        console.log("Selecting Die Cut options...");
        await selectDieCutOptions(driver, true, "Die Cut", "Square", "Gloss", "Normal", 100);
        console.log("Uploading file...");
        await uploadFile(driver);
        console.log("All steps completed.");
    } catch (error) {
        console.log("Test failed: " + error);
    } finally {
        // await driver.quit();
    }
}

runAutomation();