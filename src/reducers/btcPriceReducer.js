import { UPDATE_BTC_PRICE, UPDATE_BTC_CURRENCIES } from '../actions/updateBtcInfo';

const initialState = {
  currentBtcPrice: '',
  currencies: [],
  defaultCurrency: 'USD'
};

export const btcPrice = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BTC_PRICE:
    return {
      ...state,
      currentBtcPrice: action.price,
    };
    case UPDATE_BTC_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
    default:
      return state;
  }
};