const DIECUT_XPATHS = {
    clickStickers: "/html/body/div/div/div/div[1]/header/div[2]/div[1]/div/div[2]/div/div/nav/a[1]",
    clickPaperBasedStickers: "/html/body/div/div/div/div[1]/header/div[2]/div[2]/div/div/div/div/div[1]/a[1]",
    clickArtPaper: "/html/body/div/div/div/div[1]/header/div[2]/div[2]/div/div/div/div/div[2]/a[1]/section/div[1]/figure/img",
    
    //Art Paper Stickers
    dieCutStickers: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[2]/div/div[1]/ul/li[1]",
    kissCutStickers: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[2]/div/div[1]/ul/li[2]",
    sheetStikcers: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[2]/div/div[1]/ul/li[3]",
    rollStickers: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[2]/div/div[1]/ul/li[4]",
    
    //Art Paper Stickers - SIZES

    //Art Paper Stickers - SHAPES
    dieCutSquare: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li/i/em",
    kissCutSquare: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[2]/i",
    kissCutCircle: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[1]/i/em",
    kissCutRounded: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[3]/i/em",
    kissCutComplex: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[4]/i/em",
    sheetSimple:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[1]",
    sheetComplex: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[2]",
    rollCircle:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[2]",
    rollSquare:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[2]/i/em",
    rollRounded:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[3]/i/em",
    rollComplex:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[4]/i/em", 

    //Art Paper Stickers - FINISHING
    dieCutFinishingGloss: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[1]",
    dieCutFinishingMatte: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[2]",
    dieCutFinishingUncoated: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[3]",
    kissCutFinishingGloss: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[1]",
    kissCutFinishingMatte:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[2]",
    kissCutFinishingUncoated:"/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[4]/div/div[1]/ul/li[3]/i/em",
    sheetFinishingGloss: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[1]",
    sheetFinishingMatte: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[2]",
    sheetFinishingUncoated: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[5]/div/div[1]/ul/li[3]",
    rollFinishingGloss: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[1]",
    rollFinishingMatte: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[2]",

    //Art Paper Stickers - ADHESIVE
    dieCutAdhesivesNormal: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[1]",
    dieCutAdhesivesStrong: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[2]",
    kissCutAdhesivesNormal: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[1]",
    kissCutAdhesivesStrong: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[6]/div/div[1]/ul/li[2]",
    sheetAdhesiveNormal: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div/div[1]/ul/li[1]",
    sheetAdhesiveStrong: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div/div[1]/ul/li[2]",
    //No Adhesive for Roll Stickers
    
    //Art Paper Stickers - QUANTITY
   stickersQuantity100: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[1]",
   stickersQuantity200: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[2]",
   stickersQuantitySeeMore: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[3]",
   stickersQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[1]",
   stickersQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[2]",
   stickersQuantity500: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[3]",
   stickersQuantity1000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[4]",
   stickersQuantity2000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[5]",
   stickersQuantity3000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[6]",
   stickersQuantity4000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[7]",
   stickersQuantity5000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[8]",
   stickersQuantity6000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[9]",
   stickersQuantity7000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[10]",
   stickersQuantity8000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[11]",
   stickersQuantity9000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[12]",
   stickersQuantity10000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[13]",
   stickersQuantity100000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[14]",
   sheetQuantity100: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/li[1]",
   sheetQuantity200: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/li[2]",
   sheetQuantitySeeMore: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/li[3]",
   sheetQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[1]",
    sheetQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[2]",
    sheetQuantity500: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[3]", 
    sheetQuantity1000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[4]",
    sheetQuantity2000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[5]",
    sheetQuantity3000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[6]",
    sheetQuantity4000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[7]",
    sheetQuantity5000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[8]",
    sheetQuantity6000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[9]",
    sheetQuantity7000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[10]",
    sheetQuantity8000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[11]",
    sheetQuantity9000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[12]",
    sheetQuantity10000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[13]",
    sheetQuantity100000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[14]", 
   rollStickersQuantity10: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[1]",
   rollStickersQuantity100: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[2]",
   rollStickersQuantity200: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[1]",
   rollStickersQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[2]",
    rollStickersQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[3]",
   stickersAddToCart: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[3]/div[2]/button[1]",
   
    
};

module.exports = DIECUT_XPATHS;