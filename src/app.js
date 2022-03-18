//
const stockList = require("./krx-web-scraper/webScraper");

const callBack = (response) => {
  try {
    response.forEach((element) => {
      console.log("종목코드 : " + element.ISU_SRT_CD);
      console.log("종목명 : " + element.ISU_NM);
      console.log("시장 : " + element.MKT_TP_NM);
      console.log("주식타입 : " + element.KIND_STKCERT_TP_NM);
      console.log("주식수 : " + parseInt(element.LIST_SHRS.replace(/,/g, "")));
    });
  } catch (error) {
    console.error(error);
  }
};

stockList(callBack);
