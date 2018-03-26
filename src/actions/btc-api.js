import { getApiAction } from './api-actions';

export const GET_BTC_PRICE_REQUEST = 'GET_BTC_PRICE_REQUEST';
export const GET_BTC_PRICE_SUCCESS = 'GET_BTC_PRICE_SUCCESS';
export const GET_BTC_PRICE_FAILURE = 'GET_BTC_PRICE_FAILURE';

export const fetchBtcPriceAction = () => (
  getApiAction({
    types: [GET_BTC_PRICE_REQUEST, GET_BTC_PRICE_SUCCESS, GET_BTC_PRICE_FAILURE],
    url: 'https://blockchain.info/ticker',
  })
);
