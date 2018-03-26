import { combineReducers } from 'redux';
import { btcInfo } from './btc-info-reducer';
import { btcPrice } from './/btc-price-reducer';

const reducers = {
  btcInfo: btcInfo,
  btcPrice: btcPrice
}

const appReducer = combineReducers(reducers);

export default appReducer;