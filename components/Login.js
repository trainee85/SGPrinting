const { By, until } = require("selenium-webdriver");

const LOGIN_XPATHS = {
    loginIcon: "/html/body/div/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[2]/div/div/a",
    signInButton: "/html/body/div/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[2]/div/div[2]/ul/li[1]/button",
    modal: "/html/body/div/div/div/div[4]/div/div/div[2]",
    emailInput: "/html/body/div/div/div/div[4]/div/div/div[2]/div/form/div[1]/div/input",
    passwordInput: "/html/body/div/div/div/div[4]/div/div/div[2]/div/form/div[2]/div/input",
    loginButton: "/html/body/div/div/div/div[4]/div/div/div[2]/div/form/div[4]/button"
};

// const JAPAN_XPATHS = {
//     loginIcon: "/html/body/div/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[1]/div/div/a",
//     signInButton: "/html/body/div/div/div/div[1]/header/div[1]/div/div/div[2]/ul/li[1]/div/div[2]/ul/li[1]/button",
//     modal: "/html/body/div/div/div/div[2]/div/div/div[2]",
//     emailInput: "/html/body/div/div/div/div[2]/div/div/div[2]/div/form/div[1]/div/input",
//     passwordInput: "/html/body/div/div/div/div[2]/div/div/div[2]/div/form/div[2]/div/input",
//     loginButton: "/html/body/div/div/div/div[2]/div/div/div[2]/div/form/div[4]/button"
// };

async function login(driver, email, password) {
    
    let clickLoginIcon = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.loginIcon)), 5000);
    await clickLoginIcon.click();
    
    let clickSignInButton = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.signInButton)), 5000);
    await clickSignInButton.click();

    let modal = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.modal)), 10000);
    await driver.wait(until.elementIsVisible(modal), 5000);
    await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", modal);
    await driver.sleep(1000);

    let emailInput = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.emailInput)), 5000);
    await emailInput.sendKeys(email);

    let passwordInput = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.passwordInput)), 5000);
    await passwordInput.sendKeys(password);

    let loginButton = await driver.wait(until.elementLocated(By.xpath(LOGIN_XPATHS.loginButton)), 5000);
    await loginButton.click();

    await driver.sleep(5000);
    console.log("Login successful!");
}

module.exports = { login };
