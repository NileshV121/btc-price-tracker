import { put, takeEvery, select } from 'redux-saga/effects';

import {
  UPDATE_DEFAULT_CURRENCY,
  CALCULATE_BTC,
  updatePrice,
  updateCurrencies,
  updateCalculatedBtcPrice,
} from '../actions/btc-info';
import { GET_BTC_PRICE_SUCCESS } from '../actions/btc-api';


function* updateBtcInfo(action){
  const selectedCurrency = yield select(state => state.btcPrice.selectedCurrency);
  yield put(updatePrice(action.data[selectedCurrency].last));
  yield put(updateCurrencies(Object.keys(action.data)));
}

function* updateBtcPrice(){
  const selectedCurrency = yield select(state => state.btcPrice.selectedCurrency)
  const btcPrice = yield select(state => state.btcInfo.info[selectedCurrency].last)
  yield put(updatePrice(btcPrice));
}

function* calcualteBtc(action){
  const currentBtcPrice = yield select(state => state.btcPrice.currentBtcPrice);
  yield put(updateCalculatedBtcPrice(action.heldBtc * currentBtcPrice));
}


export function* watchGetBtcPriceApi() {
  yield takeEvery(GET_BTC_PRICE_SUCCESS, updateBtcInfo);
}

export function* watchUpdateSelectedCurrency() {
  yield takeEvery(UPDATE_DEFAULT_CURRENCY, updateBtcPrice);
}

export function* watchCalcualteBtc() {
  yield takeEvery(CALCULATE_BTC, calcualteBtc)
}
