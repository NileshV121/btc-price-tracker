import { put, takeEvery, select } from 'redux-saga/effects';
import { GET_BTC_PRICE_SUCCESS } from './fetch-btc-price';

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


export const UPDATE_DEFAULT_CURRENCY = "UPDATE_DEFAULT_CURRENCY";

export const updateDefaultCurrency = (currency) => ({
  type: UPDATE_DEFAULT_CURRENCY,
  currency
});

function* updateBtcPrice(){
  const defaultCurrency = yield select( (state) => state.btcPrice.defaultCurrency)
  const btcPrice = yield select( (state) => state.btcInfo.info[defaultCurrency].last)
  yield put({ type: UPDATE_BTC_PRICE, price: btcPrice })
}

export function* watchUpdateDefaultCurrency() {
  yield takeEvery(UPDATE_DEFAULT_CURRENCY, updateBtcPrice);
}
