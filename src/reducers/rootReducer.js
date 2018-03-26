import { combineReducers } from 'redux';
import { btcInfo } from './btcInfoReducer';
import { btcPrice } from './btcPriceReducer';

const reducers = {
  btcInfo: btcInfo,
  btcPrice: btcPrice
}

const appReducer = combineReducers(reducers);

export default appReducer;