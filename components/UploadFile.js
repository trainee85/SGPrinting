const { By, until } = require("selenium-webdriver");
const path = require("path");

const UPLOAD_FILEXPATHS = {
    dieCutAddToCart: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[3]/div[2]/button[1]",
    fileInput: "/html/body/div/div/div/div[1]/header/div[3]/input",
    specialInstruction : "/html/body/div/div/div/div[1]/header/div[3]/div/div[2]/div[1]/textarea",
    continueButton : "/html/body/div/div/div/div[1]/header/div[3]/div/div[2]/div[2]/div/button[1]",
    closeCartModal : "/html/body/div/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[2]/div/a"
};

// const JAPAN_FILEXPATHS = {
//     dieCutAddToCart: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[13]/div/button[1]/font/font",
//     fileInput: "/html/body/div[1]/div/div/div[1]/header/div[3]/div/div[2]/label/input",
//     specialInstruction : "/html/body/div[1]/div/div/div[1]/header/div[3]/div/div[2]/div[1]/textarea",
//     continueButton : "/html/body/div[1]/div/div/div[1]/header/div[3]/div/div[2]/div[2]/button",
//     closeCartModal : "/html/body/div[1]/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[2]/div/a"
// };

async function uploadFile(driver) {

    // Ensure the input field is visible
    let fileInput = await driver.wait(until.elementLocated(By.xpath(UPLOAD_FILEXPATHS.fileInput)), 5000);
    await driver.executeScript("arguments[0].style.display = 'block';", fileInput); // Unhide if hidden

    // Define the absolute path to the file (Update this path with your actual file location)
    let filePath = path.resolve("C:\\Users\\GlophicsQA\\Desktop\\testingg.png");

    // Set file path into input field (this uploads the file)
    await fileInput.sendKeys(filePath);
    console.log("File uploaded successfully!");
    await driver.sleep(2000);

    let specialInstruction = await driver.wait(until.elementLocated(By.xpath(UPLOAD_FILEXPATHS.specialInstruction)), 5000);
    await specialInstruction.sendKeys("This is a test file");
    console.log("Special instruction added successfully!");
    await driver.sleep(2000);

    let continueButton = await driver.wait(until.elementLocated(By.xpath(UPLOAD_FILEXPATHS.continueButton)), 5000);
    await continueButton.click();   
    console.log("Continue button clicked successfully!");
    await driver.sleep(10000);

    let closeCartModal = await driver.wait(until.elementLocated(By.className("close_modal")), 5000);
    await closeCartModal.click();
    console.log("Close Cart Modal button clicked successfully!");
    await driver.sleep(2000);
}

module.exports = { uploadFile };