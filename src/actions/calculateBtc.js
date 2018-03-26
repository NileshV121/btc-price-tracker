import { getApiAction } from '../api/apiActions';

export const CALCULATE_BTC = "GET_BTC_PRICE";
export const CALCULATE_BTC_SUCCESS = "CALCULATE_BTC_SUCCESS";
export const CALCULATE_BTC_FAILURE = "CALCULATE_BTC_FAILURE";

export const calcualteBtc = (params) => (
  getApiAction({
    types: [CALCULATE_BTC, CALCULATE_BTC_SUCCESS, CALCULATE_BTC_FAILURE],
    url: "https://blockchain.info/ticker"
  })
);