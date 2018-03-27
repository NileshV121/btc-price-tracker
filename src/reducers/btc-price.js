import {
  UPDATE_BTC_PRICE,
  UPDATE_BTC_CURRENCIES,
  UPDATE_SELECTED_CURRENCY,
  UPDATE_CALCULATED_BTC_PRICE,
  UPDATE_BTC_INPUT_TERM,
} from '../actions/btc-info';

export const initialState = {
  currentBtcPrice: '',
  currencies: [],
  selectedCurrency: 'USD',
  inputTerm: '',
  calculatedBtcPrice: 0,
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

    case UPDATE_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.currency,
      };

    case UPDATE_CALCULATED_BTC_PRICE:
      return {
        ...state,
        calculatedBtcPrice: action.calculatedBtcPrice,
      }

    case UPDATE_BTC_INPUT_TERM:
      return {
        ...state,
        inputTerm: action.inputTerm,
      }
    default:
      return state;
  }
};
