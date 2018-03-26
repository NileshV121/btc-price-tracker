import { fork } from 'redux-saga/effects';

import { sagaMiddleware } from '../store';
import { watchGetApi } from './api-saga';
import {
  watchGetBtcPriceApi,
  watchUpdateSelectedCurrency,
  watchCalcualteBtc,
} from './btc-saga';


function* root() {
  yield fork(watchGetApi);
  yield fork(watchCalcualteBtc);
  yield fork(watchGetBtcPriceApi);
  yield fork(watchUpdateSelectedCurrency);
}

const runSaga = () => sagaMiddleware.run(root);


export default runSaga;
