import { UPDATE_BTC_PRICE, UPDATE_BTC_CURRENCIES, UPDATE_DEFAULT_CURRENCY } from '../actions/updateBtcInfo';

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
    case UPDATE_DEFAULT_CURRENCY:
    return {
      ...state,
      defaultCurrency: action.currency
    };
    default:
      return state;
  }
};