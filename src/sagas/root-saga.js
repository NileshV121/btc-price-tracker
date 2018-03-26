import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import { watchGetApi } from './api-saga';
import { watchGetBtcPriceApi, watchUpdateDefaultCurrency } from '../actions/update-btc-info';

function* root() {
  yield fork(watchGetApi);
  yield fork(watchGetBtcPriceApi);
  yield fork(watchUpdateDefaultCurrency);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;