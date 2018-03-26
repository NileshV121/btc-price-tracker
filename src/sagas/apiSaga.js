import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_API_ACTION } from '../api/apiActions';
import { getApiCall } from '../api/api';

function manageResponse(response) {
  return {
    ...response
  };
}

function* getApi(action) {
  yield put({ type: action.types[0] });
  const response = yield call(getApiCall, action.url, action.body);
  const data = yield call(manageResponse, response);
  yield put({ type: action.types[1], data});
}

export function* watchGetApi() {
  yield takeEvery(GET_API_ACTION, getApi);
}
