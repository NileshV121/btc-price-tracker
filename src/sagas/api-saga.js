import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_API_ACTION } from '../actions/api-actions';
import { getApiCall } from '../api/api';

function manageResponse(response) {
  // can hack into response object here.
  const preparedResponse = {
    ...response,
  };

  return preparedResponse;
}

function* getApi(action) {
  // notify before api request call.
  yield put({ type: action.types[0] });

  // call the api.
  const response = yield call(getApiCall, action.url, action.body);
  const data = yield call(manageResponse, response);

  // notify api call success.
  yield put({ type: action.types[1], data });
}

export default function* watchGetApi() {
  yield takeEvery(GET_API_ACTION, getApi);
}
