const axios = require("axios");
const common = require("./common-const");

const getData = (code, market = common.MARKET_ALL, date, callBack) => {
  if (!code) return;

  const options = {
    method: "get",
    url: common.BASE_URL,
    params: {
      bld: code,
      mktId: market,
      trdDd: date,
    },
    headers: { "User-Agent": "Mozilla/5.0" },
  };

  axios(options)
    .then((res) => {
      console.log(res);
      callBack(res.data.OutBlock_1);
    })
    .catch((error) => {
      console.error(error);
    });
};

// 기간합계, 거래대금, 순매수, 거래량단위: 천주, 금액단위: 백만원
const getDataFromTo = (
  code,
  market = common.MARKET_ALL,
  startDate,
  endDate,
  callBack
) => {
  if (!code) return;

  const options = {
    method: "get",
    url: common.BASE_URL,
    params: {
      inqTpCd: 1,
      trdVolVal: 2,
      askBid: 3,
      share: 2,
      money: 3,
      bld: code,
      mktId: market,
      strtDd: startDate,
      endDd: endDate,
    },
    headers: { "User-Agent": "Mozilla/5.0" },
  };

  axios(options)
    .then((res) => {
      console.log(res);
      callBack(res.data.output);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getData,
  getDataFromTo,
};
