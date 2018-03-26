import { combineReducers } from 'redux';
import { btcInfo } from './btc-info';
import { btcPrice } from './/btc-price';


const reducers = {
  btcInfo,
  btcPrice,
};

const appReducer = combineReducers(reducers);

export default appReducer;
