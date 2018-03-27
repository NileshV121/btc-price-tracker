
export const UPDATE_BTC_PRICE = "UPDATE_BTC_PRICE";
export const UPDATE_BTC_CURRENCIES = "UPDATE_BTC_CURRENCIES";
export const UPDATE_SELECTED_CURRENCY = "UPDATE_SELECTED_CURRENCY";

export const CALCULATE_BTC = 'CALCULATE_BTC';
export const UPDATE_CALCULATED_BTC_PRICE = 'UPDATE_CALCULATED_BTC_PRICE';

export const UPDATE_BTC_INPUT_TERM = 'UPDATE_BTC_INPUT_TERM';


export const updatePrice = price => ({
  type: UPDATE_BTC_PRICE,
  price,
});

export const updateCurrencies = currencies => ({
  type: UPDATE_BTC_CURRENCIES,
  currencies,
});

export const updateSelectedCurrency = currency => ({
  type: UPDATE_SELECTED_CURRENCY,
  currency
});

export const calcualteBtc = heldBtc => ({
  type: CALCULATE_BTC,
  heldBtc,
});

export const updateCalculatedBtcPrice = updatePrice => ({
  type: UPDATE_CALCULATED_BTC_PRICE,
  calculatedBtcPrice: updatePrice,
});

export const updateBtcInputTerm = inputTerm => ({
  type: UPDATE_BTC_INPUT_TERM,
  inputTerm,
});
