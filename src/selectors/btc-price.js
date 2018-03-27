import { createSelector } from 'reselect';
import { getBtcPriceInfo } from './btc-info';

export const getBtcPrice = state => state.btcPrice;

export const getCurrentBtcPrice = createSelector(
  getBtcPrice,
  btcPrice => btcPrice.currentBtcPrice,
);

export const getSelectedCurrency = createSelector(
  getBtcPrice,
  btcPrice => btcPrice.selectedCurrency,
);

export const getCalculatedBtcPrice = createSelector(
  getBtcPrice,
  btcPrice => btcPrice.calculatedBtcPrice,
);

export const getCurrentPriceBySelectedCurrency = createSelector(
  [getBtcPriceInfo, getSelectedCurrency],
  (price, currency) => price[currency].last,
);

export const getCurrencies = createSelector(
  getBtcPrice,
  btcPrice => btcPrice.currencies,
);

export const getInputTerm = createSelector(
  getBtcPrice,
  btcPrice => btcPrice.inputTerm,
);
