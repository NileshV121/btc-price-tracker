import {
  GET_BTC_PRICE,
  GET_BTC_PRICE_SUCCESS,
  GET_BTC_PRICE_FAILURE,
} from '../actions/fetchBtcPrice';

const initialState = {
  isGettingBtcPrice: false,
  info: [],
};

export const btcInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_BTC_PRICE:
      return {
        ...state,
        isGettingBtcPrice: true,
      };
    case GET_BTC_PRICE_SUCCESS:
      return {
        ...state,
        isGettingBtcPrice: false,
        info: action.data,
      };
    case GET_BTC_PRICE_FAILURE:
      return {
        ...state,
        isGettingBtcPrice: false,
      };
    default:
      return state;
  }
};
