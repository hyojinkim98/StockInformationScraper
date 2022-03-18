function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
  });
}

define("BASE_URL", "http://data.krx.co.kr/comm/bldAttendant/getJsonData.cmd");

define("BLD_ALL_STOCK_CODE", "dbms/MDC/STAT/standard/MDCSTAT01901"); // 전종목 기본정보

/* 전종목 시세
종목코드, 종목명, 시장구분, 소속부, 종가, 대비, 등락률, 시가, 고가, 저가, 거래량, 거래대금, 시가총액, 상장주식수
*/

define("BLD_ALL_STOCK_PRICE", "dbms/MDC/STAT/standard/MDCSTAT01501");

define("MARKET_ALL", "ALL");
define("MARKET_KOSPI", "STK");
define("MARKET_KOSDAQ", "KSQ");
define("MARKET_KONEX", "KNX");
define("HEADERS", {
  "User-Agent": "Mozilla/5.0",
});
