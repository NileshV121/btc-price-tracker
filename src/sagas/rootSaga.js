import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchGetApi } from './apiSaga';
import { watchGetBtcPriceApi, watchUpdateDefaultCurrency } from '../actions/updateBtcInfo';

function* root() {
  yield fork(watchGetApi);
  yield fork(watchGetBtcPriceApi);
  yield fork(watchUpdateDefaultCurrency);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;