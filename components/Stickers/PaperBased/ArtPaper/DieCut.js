const { By, until } = require("selenium-webdriver");
const DIECUT_XPATHS = require("../../../stickersXpaths/DieCutXPaths");

async function selectDieCutOptions(driver, isFirstOrder, sticker, shape, finishing, adhesive, quantity) {
    console.log(`Selecting DieCut Options: Quantity=${quantity}, Adhesive=${adhesive}, Finishing=${finishing}`);
    if (isFirstOrder) {
        let clickStickers = await driver.wait(until.elementLocated(By.xpath(DIECUT_XPATHS.clickStickers)), 5000);
        await clickStickers.click();
        await driver.sleep(2000);

        let clickPaperBasedStickers = await driver.wait(until.elementLocated(By.xpath(DIECUT_XPATHS.clickPaperBasedStickers), 2000));
        await clickPaperBasedStickers.click();
        await driver.sleep(2000);

        let clickArtPaper = await driver.wait(until.elementLocated(By.xpath(DIECUT_XPATHS.clickArtPaper), 5000));
        await clickArtPaper.click();
        await driver.sleep(2000);
    }
    
    let stickerTypeXpath;
    if (sticker === "Die Cut") {
        stickerTypeXpath = DIECUT_XPATHS.dieCutStickers;
    } else if (sticker === "Kiss Cut") {
        stickerTypeXpath = DIECUT_XPATHS.kissCutStickers;
    } else if (sticker === "Sheet") {
        stickerTypeXpath = DIECUT_XPATHS.sheetStikcers;
    } else if (sticker === "Roll") {
        stickerTypeXpath = DIECUT_XPATHS.rollStickers;
    }
    await driver.sleep(2000);
    // Re-locate the element before interacting with it
    let clickStickerType = await driver.wait(until.elementLocated(By.xpath(stickerTypeXpath)), 5000);
    await clickStickerType.click();
    await driver.sleep(2000);
    console.log(`Selected Sticker Type: ${sticker}`);
  

    let shapeXpath;
    if (sticker === "Die Cut") {
        if (shape === "Square") {
            shapeXpath = DIECUT_XPATHS.dieCutSquare;
        }
    } else if (sticker === "Kiss Cut") {
        if (shape === "Square") {
            shapeXpath = DIECUT_XPATHS.kissCutSquare;
        }
        else if (shape === "Circle") {
            shapeXpath = DIECUT_XPATHS.kissCutCircle;
        }
        else if (shape === "Rounded") {
            shapeXpath = DIECUT_XPATHS.kissCutRounded;
        }
        else if (shape === "Complex") {
            shapeXpath = DIECUT_XPATHS.kissCutComplex;
        }
    } else if (sticker === "Sheet") {
        if (shape === "Simple") {
            shapeXpath = DIECUT_XPATHS.sheetSimple;
        }
        else if (shape === "Complex") {
            shapeXpath = DIECUT_XPATHS.sheetComplex;
        }
    } else if (sticker === "Roll") {
        if (shape === "Circle") {
            shapeXpath = DIECUT_XPATHS.rollCircle;
        }
        else if (shape === "Square") {
            shapeXpath = DIECUT_XPATHS.rollSquare;
        }
        else if (shape === "Rounded") {
            shapeXpath = DIECUT_XPATHS.rollRounded;
        }
        else if (shape === "Complex") {
            shapeXpath = DIECUT_XPATHS.rollComplex;
        }
    }

    
    let clickShape = await driver.wait(until.elementLocated(By.xpath(shapeXpath)), 5000);
    await clickShape.click();
    await driver.sleep(2000);
    console.log(`Selected Shape: ${shape}`);

    // **Select Finishing**
    let finishingXPath;
    if(sticker === "Die Cut") {
        if (finishing === "Gloss") {
            finishingXPath = DIECUT_XPATHS.dieCutFinishingGloss;
        } else if (finishing === "Matte") {
            finishingXPath = DIECUT_XPATHS.dieCutFinishingMatte;
        } else if (finishing === "Uncoated") {
            finishingXPath = DIECUT_XPATHS.dieCutFinishingUncoated;
        }
    }
    else if (sticker === "Kiss Cut") {
        if (finishing === "Gloss") {
            finishingXPath = DIECUT_XPATHS.kissCutFinishingGloss;
        } else if (finishing === "Matte") {
            finishingXPath = DIECUT_XPATHS.kissCutFinishingMatte;
        } else if (finishing === "Uncoated") {
            finishingXPath = DIECUT_XPATHS.kissCutFinishingUncoated;
        }
    }
    else if (sticker === "Sheet") {
        if (finishing === "Gloss") {
            finishingXPath = DIECUT_XPATHS.sheetFinishingGloss;
        } else if (finishing === "Matte") {
            finishingXPath = DIECUT_XPATHS.sheetFinishingMatte;
        } else if (finishing === "Uncoated") {
            finishingXPath = DIECUT_XPATHS.sheetFinishingUncoated;
        }
    }
    else if (sticker === "Roll") {
        if (finishing === "Gloss") {
            finishingXPath = DIECUT_XPATHS.rollFinishingGloss;
        } else if (finishing === "Matte") {
            finishingXPath = DIECUT_XPATHS.rollFinishingMatte;
        } else if (finishing === "Uncoated") {
            finishingXPath = DIECUT_XPATHS.rollFinishingUncoated;
        }
    }
    let clickDieCutFinishing = await driver.wait(until.elementLocated(By.xpath(finishingXPath)), 5000);
    await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", clickDieCutFinishing);
    await driver.sleep(1000);
    await clickDieCutFinishing.click();
    console.log(`Selected Finishing: ${finishing}`);
    

    // **Select Adhesive**
    if (sticker === "Roll") {
        console.log("No adhesive selection required for Roll Stickers.");
    } else {
        let adhesiveXPath;
        if (sticker === "Die Cut") {
            if (adhesive === "Normal") {
                adhesiveXPath = DIECUT_XPATHS.dieCutAdhesivesNormal;
            } else if (adhesive === "Strong") {
                adhesiveXPath = DIECUT_XPATHS.dieCutAdhesivesStrong;
            }
        } else if (sticker === "Kiss Cut") {
            if (adhesive === "Normal") {
                adhesiveXPath = DIECUT_XPATHS.kissCutAdhesivesNormal;
            } else if (adhesive === "Strong") {
                adhesiveXPath = DIECUT_XPATHS.kissCutAdhesivesStrong;
            }
        } else if (sticker === "Sheet") {
            if (adhesive === "Normal") {
                adhesiveXPath = DIECUT_XPATHS.sheetAdhesiveNormal;
            } else if (adhesive === "Strong") {
                adhesiveXPath = DIECUT_XPATHS.sheetAdhesiveStrong;
            }
        }
    
        if (!adhesiveXPath) {
            throw new Error(`Adhesive XPath is not defined for sticker: ${sticker}, adhesive: ${adhesive}`);
        }
    
        let clickDieCutAdhesive = await driver.wait(until.elementLocated(By.xpath(adhesiveXPath)), 5000);
        await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", clickDieCutAdhesive);
        await driver.sleep(1000);
        await clickDieCutAdhesive.click();
        console.log(`Selected Adhesive: ${adhesive}`);
    }

    // **Select Quantity**
   // Define a mapping object for sticker types and their corresponding quantity XPaths
const quantityXPathMap = {
    "Die Cut": {
        100: DIECUT_XPATHS.stickersQuantity100,
        200: DIECUT_XPATHS.stickersQuantity200,
        300: DIECUT_XPATHS.stickersQuantity300,
        400: DIECUT_XPATHS.stickersQuantity400,
        500: DIECUT_XPATHS.stickersQuantity500,
        1000: DIECUT_XPATHS.stickersQuantity1000,
        2000: DIECUT_XPATHS.stickersQuantity2000,
        3000: DIECUT_XPATHS.stickersQuantity3000,
        4000: DIECUT_XPATHS.stickersQuantity4000,
        5000: DIECUT_XPATHS.stickersQuantity5000,
        10000: DIECUT_XPATHS.stickersQuantity10000,
        100000: DIECUT_XPATHS.stickersQuantity100000,
        default: DIECUT_XPATHS.stickersQuantity100, // Default to 100 if not found
    },
    "Kiss Cut": {
        100: DIECUT_XPATHS.stickersQuantity100,
        200: DIECUT_XPATHS.stickersQuantity200,
        300: DIECUT_XPATHS.stickersQuantity300,
        400: DIECUT_XPATHS.stickersQuantity400,
        500: DIECUT_XPATHS.stickersQuantity500,
        1000: DIECUT_XPATHS.stickersQuantity1000,
        2000: DIECUT_XPATHS.stickersQuantity2000,
        3000: DIECUT_XPATHS.stickersQuantity3000,
        4000: DIECUT_XPATHS.stickersQuantity4000,
        5000: DIECUT_XPATHS.stickersQuantity5000,
        10000: DIECUT_XPATHS.stickersQuantity10000,
        100000: DIECUT_XPATHS.stickersQuantity100000,
        default: DIECUT_XPATHS.stickersQuantity100,
    },
    "Sheet": {
        100: DIECUT_XPATHS.sheetQuantity100,
        200: DIECUT_XPATHS.sheetQuantity200,
        300: DIECUT_XPATHS.sheetQuantity300,
        400: DIECUT_XPATHS.sheetQuantity400,
        500: DIECUT_XPATHS.sheetQuantity500,
        1000: DIECUT_XPATHS.sheetQuantity1000,
        2000: DIECUT_XPATHS.sheetQuantity2000,
        3000: DIECUT_XPATHS.sheetQuantity3000,
        4000: DIECUT_XPATHS.sheetQuantity4000,
        5000: DIECUT_XPATHS.sheetQuantity5000,
        6000: DIECUT_XPATHS.sheetQuantity6000,
        7000: DIECUT_XPATHS.sheetQuantity7000,
        8000: DIECUT_XPATHS.sheetQuantity8000,
        9000: DIECUT_XPATHS.sheetQuantity9000,
        10000: DIECUT_XPATHS.sheetQuantity10000,
        100000: DIECUT_XPATHS.sheetQuantity100000,
        default: DIECUT_XPATHS.sheetQuantity100,
    },
    "Roll": {
        10: DIECUT_XPATHS.rollStickersQuantity10,
        100: DIECUT_XPATHS.rollStickersQuantity100,
        200: DIECUT_XPATHS.rollStickersQuantity200,
        300: DIECUT_XPATHS.rollStickersQuantity300,
        400: DIECUT_XPATHS.rollStickersQuantity400,
        default: DIECUT_XPATHS.rollStickersQuantity10,
    },
};

// Determine the correct XPath based on the sticker type and quantity
let quantityXPath = quantityXPathMap[sticker]?.[quantity] || quantityXPathMap[sticker]?.default;

if (!quantityXPath) {
    throw new Error(`Quantity XPath is not defined for sticker: ${sticker}, quantity: ${quantity}`);
}

// Locate and click the quantity element
let clickDieCutQuantity = await driver.wait(until.elementLocated(By.xpath(quantityXPath)), 5000);
await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", clickDieCutQuantity);
await driver.sleep(2000);
await clickDieCutQuantity.click();
console.log(`Selected Quantity: ${quantity}`);

    // **Add to Cart**
    
    let clickDieCutAddToCart = await driver.wait(until.elementLocated(By.xpath(DIECUT_XPATHS.stickersAddToCart)), 5000);
    await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", clickDieCutAddToCart);
    await clickDieCutAddToCart.click();
    console.log("Added to Cart");
    await driver.sleep(2000);

    console.log(`Die Cut selection completed for Quantity: ${quantity}, Adhesive: ${adhesive}, Finishing: ${finishing}`);
}

module.exports = { selectDieCutOptions };
