//
const getData = require("./krx-web-scraper/webScraper");
const common = require("./krx-web-scraper/common-const");
const formatDate = require("./util/utility");

//BLD_ALL_STOCK_CODE
const stockCodeCallBack = (response) => {
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

const responseCallback = (response) => {
  try {
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

date = formatDate(new Date(), "yyyymmdd");

//전종목 기본정보
// getData(common.BLD_ALL_STOCK_CODE, common.MARKET_ALL, date, stockCodeCallBack);

//전종목 현재가
getData(common.BLD_ALL_STOCK_PRICE, common.MARKET_ALL, date, responseCallback);
