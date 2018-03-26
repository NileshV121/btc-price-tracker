import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchGetApi } from './apiSaga';
import { watchGetBtcPriceApi } from '../actions/updateBtcInfo';

function* root() {
  yield fork(watchGetApi);
  yield fork(watchGetBtcPriceApi);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;