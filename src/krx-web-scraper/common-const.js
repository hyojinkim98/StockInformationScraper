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

/* 전종목 지정 내역 
종목코드(ISU_SRT_CD), 종목명(ISU_ABBRV), 매매거래정지(HALT_YN), 정리매매종목(ARRANTRD_YN), 관리종목(ADMISU_YN), 
투자주의환기종목(INVSTCAUTN_REMND_ISU_YN), 불성실공시(NFAITHDISCLS_YN), 단일가매매대상초저유동성종목(VLWLIQU_VALU_YN),
상장주식수 부족 우선주(UNIT_TRD_YN), 단기과열 종목(SRTTRM_OVERHEAT_ISU_TP_YN), 투자주의종목(INVSTCAUTN_YN),
 투자경고종목(NVST_WARN_YN), 투자위험종목(NVST_RISK_YN)
*/
define("BLD_ALL_STOCK_RISK", "dbms/MDC/STAT/standard/MDCSTAT02001");

define("MARKET_ALL", "ALL");
define("MARKET_KOSPI", "STK");
define("MARKET_KOSDAQ", "KSQ");
define("MARKET_KONEX", "KNX");
define("HEADERS", {
  "User-Agent": "Mozilla/5.0",
});
