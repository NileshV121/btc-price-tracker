import {
  GET_BTC_PRICE_REQUEST,
  GET_BTC_PRICE_SUCCESS,
  GET_BTC_PRICE_FAILURE,
} from '../actions/btc-api';


export const initialState = {
  isLoading: false,
  info: {},
};

export const btcInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_BTC_PRICE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_BTC_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        info: action.data,
      };

    case GET_BTC_PRICE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
