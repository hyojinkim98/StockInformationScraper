const axios = require("axios");
const common = require("./common-const");

// define("BASE_URL", "http://data.krx.co.kr/comm/bldAttendant/getJsonData.cmd");
// define("BLD_ALL_STOCK_CODE", "dbms/MDC/STAT/standard/MDCSTAT01901");
// define("MARKET_ALL", "ALL");

const stockList = (callBack) => {
  let response;
  const options = {
    method: "get",
    url: common.BASE_URL,
    params: { bld: common.BLD_ALL_STOCK_CODE, mktId: common.MARKET_ALL },
    headers: { "User-Agent": "Mozilla/5.0" },
  };

  axios(options)
    .then((res) => {
      callBack(res.data.OutBlock_1);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = stockList;