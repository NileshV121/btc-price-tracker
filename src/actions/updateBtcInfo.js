import { call, put, takeEvery, select } from 'redux-saga/effects';
import { GET_BTC_PRICE_SUCCESS } from './fetchBtcPrice';

export const UPDATE_BTC_PRICE = "UPDATE_BTC_PRICE";
export const UPDATE_BTC_CURRENCIES = "UPDATE_BTC_CURRENCIES";

function* updateBtcInfo(action){
  const defaultCurrency = yield select( (state) => state.btcPrice.defaultCurrency)
  yield put({ type: UPDATE_BTC_PRICE, price: action.data[defaultCurrency].last })
  yield put({ type: UPDATE_BTC_CURRENCIES, currencies: Object.keys(action.data)})
}

export function* watchGetBtcPriceApi() {
  yield takeEvery(GET_BTC_PRICE_SUCCESS, updateBtcInfo);
}