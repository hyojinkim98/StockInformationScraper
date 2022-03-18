function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
  });
}

define("BASE_URL", "http://data.krx.co.kr/comm/bldAttendant/getJsonData.cmd");

// 주식 > 종목정보 > 전종목 기본정보
define("BLD_ALL_STOCK_CODE", "dbms/MDC/STAT/standard/MDCSTAT01901");
define("MARKET_ALL", "ALL");
define("MARKET_KOSPI", "KOSPI");
define("MARKET_KOSDAQ", "KOSDAQ");
define("HEADERS", {
  "User-Agent": "Mozilla/5.0",
});
