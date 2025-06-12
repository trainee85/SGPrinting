// const JAPAN_XPATHS = {
//     clickStickers: "/html/body/div/div/div/div[1]/header/div[2]/div[1]/div/div[2]/div/div/nav/a[1]",
//     clickPaperBasedStickers: "/html/body/div/div/div/div[1]/header/div[2]/div[2]/div/div/div/div/div[1]/a[1]",
//     clickArtPaper: "/html/body/div/div/div/div[1]/header/div[2]/div[2]/div/div/div/div/div[2]/a[1]/section/div[1]/figure/img",
    
//     //Art Paper Stickers
//     dieCutStickers: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[3]/div/div[1]/label/i",
//     kissCutStickers: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[3]/div/div[2]/label",
//     sheetStikcers: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[3]/div/div[3]/label/i",
//     rollStickers: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[3]/div/div[4]/label/i",
    
//     //Art Paper Stickers - SIZES

//     //Art Paper Stickers - SHAPES
//     dieCutSquare: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div/div/div/label/i/em",
//     kissCutSquare: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div/div/div[2]/label/i/em",
//     kissCutCircle: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div/div/div[1]/label/i/em",
//     kissCutRounded: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div/div/div[3]/label/i/em",
//     kissCutComplex: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div/div/div[4]/label/i/em",
//     sheetSimple:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div[1]/div/div[1]/label/i",
//     sheetComplex: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[5]/div[1]/div/div[2]/label/i",
//     rollCircle:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div/div[1]/label/i/em",
//     rollSquare:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div/div[2]/label/i/em",
//     rollRounded:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div/div[3]/label/i/em",
//     rollComplex:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div/div[4]/label/i/em", 

//     //Art Paper Stickers - FINISHING
//     dieCutFinishingGloss: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[1]/label/i",
//     dieCutFinishingMatte: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[2]/label/i",
//     dieCutFinishingUncoated: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[3]/label/i",
//     kissCutFinishingGloss: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[1]/label/i",
//     kissCutFinishingMatte:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[2]/label/i",
//     kissCutFinishingUncoated:"/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[3]/label/i",
//     sheetFinishingGloss: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[1]/label/i",
//     sheetFinishingMatte: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[2]/label/i",
//     sheetFinishingUncoated: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[6]/div/div[3]/label/i",
//     rollFinishingGloss: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[8]/div/div[1]/label/i",
//     rollFinishingMatte: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[8]/div/div[2]/label/i",

//     //Art Paper Stickers - ADHESIVE
//     dieCutAdhesivesNormal: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[1]/i",
//     dieCutAdhesivesStrong: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[2]/i",
//     kissCutAdhesivesNormal: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[1]/i",
//     kissCutAdhesivesStrong: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[2]/i",
//     sheetAdhesiveNormal: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[1]/i",
//     sheetAdhesiveStrong: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[7]/label[2]/i",
//     //No Adhesive for Roll Stickers
    
//     //Art Paper Stickers - QUANTITY
//    stickersQuantity100: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[9]/div/div[1]/label/i",
//    stickersQuantity200: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[9]/div/div[2]/label/i",
//    stickersQuantitySeeMore: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/li[3]",
//    stickersQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[1]",
//    stickersQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[2]",
//    stickersQuantity500: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[3]",
//    stickersQuantity1000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[4]",
//    stickersQuantity2000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[5]",
//    stickersQuantity3000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[6]",
//    stickersQuantity4000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[7]",
//    stickersQuantity5000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[8]",
//    stickersQuantity6000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[9]",
//    stickersQuantity7000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[10]",
//    stickersQuantity8000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[11]",
//    stickersQuantity9000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[12]",
//    stickersQuantity10000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[13]",
//    stickersQuantity100000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[14]",
//    sheetQuantity100: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[9]/div/div[1]/label/i",
//    sheetQuantity200: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[9]/div/div[2]/label/i",
//    sheetQuantitySeeMore: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/li[3]",
//    sheetQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[1]",
//     sheetQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[2]",
//     sheetQuantity500: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[3]", 
//     sheetQuantity1000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[4]",
//     sheetQuantity2000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[5]",
//     sheetQuantity3000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[6]",
//     sheetQuantity4000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[7]",
//     sheetQuantity5000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[8]",
//     sheetQuantity6000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[9]",
//     sheetQuantity7000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[10]",
//     sheetQuantity8000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[11]",
//     sheetQuantity9000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[12]",
//     sheetQuantity10000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[13]",
//     sheetQuantity100000: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[8]/div[2]/div[1]/ul/ul/li[14]", 
//    rollStickersQuantity10: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[10]/div/div[1]/label/i",
//    rollStickersQuantity100: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[10]/div/div[2]/label/i",
//    rollStickersQuantity200: "/html/body/div[1]/div/div/div[1]/div/section/div[1]/aside/form/div[10]/div/div[2]/label/i",
//    rollStickersQuantity300: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[2]",
//     rollStickersQuantity400: "/html/body/div/div/div/div[1]/div/div[2]/div[1]/aside/div[1]/section[7]/div[2]/div[1]/ul/ul/li[3]",
//    stickersAddToCart: "/html/body/div/div/div/div[1]/div/section/div[1]/aside/form/div[12]/div/button[1]",
   
    
// };

// module.exports = JAPAN_XPATHS;