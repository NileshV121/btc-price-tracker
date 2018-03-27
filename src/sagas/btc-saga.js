import { put, takeEvery, select } from 'redux-saga/effects';

import {
  UPDATE_SELECTED_CURRENCY,
  CALCULATE_BTC,
  updatePrice,
  updateCurrencies,
  updateCalculatedBtcPrice,
} from '../actions/btc-info';
import { GET_BTC_PRICE_SUCCESS } from '../actions/btc-api';

import {
  getSelectedCurrency,
  getCurrentPriceBySelectedCurrency,
  getCurrentBtcPrice,
} from '../selectors/btc-price';


function* updateBtcInfo(action) {
  const selectedCurrency = yield select(getSelectedCurrency);
  yield put(updatePrice(action.data[selectedCurrency].last));
  yield put(updateCurrencies(Object.keys(action.data)));
}

function* updateBtcPrice() {
  const btcPrice = yield select(getCurrentPriceBySelectedCurrency);
  yield put(updatePrice(btcPrice));
}

function* calcualteBtc(action) {
  const currentBtcPrice = yield select(getCurrentBtcPrice);
  yield put(updateCalculatedBtcPrice(action.heldBtc * currentBtcPrice));
}


export function* watchGetBtcPriceApi() {
  yield takeEvery(GET_BTC_PRICE_SUCCESS, updateBtcInfo);
}

export function* watchUpdateSelectedCurrency() {
  yield takeEvery(UPDATE_SELECTED_CURRENCY, updateBtcPrice);
}

export function* watchCalcualteBtc() {
  yield takeEvery(CALCULATE_BTC, calcualteBtc);
}
