import { getApiAction } from './api-actions';

export const GET_BTC_PRICE = "GET_BTC_PRICE";
export const GET_BTC_PRICE_SUCCESS = "GET_BTC_PRICE_SUCCESS";
export const GET_BTC_PRICE_FAILURE = "GET_BTC_PRICE_FAILURE";

export const fetchBtcPriceAction = () => (
  getApiAction({
    types: [GET_BTC_PRICE, GET_BTC_PRICE_SUCCESS, GET_BTC_PRICE_FAILURE],
    url: 'https://blockchain.info/ticker'
  })
);