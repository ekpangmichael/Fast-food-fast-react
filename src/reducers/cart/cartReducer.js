import * as actionTypes from '../../actions/cartAction/actionTypes';

const getCart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  totalItem: getCart ? getCart.length : 0,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  isLoading: false,
  response: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_COUNT:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem('cart')),
        totalItem: action.payload
      };
    case actionTypes.CART_UPDATE:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem('cart'))
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        cart: action.payload,
        totalItem: state.totalItem - 1
      };
    case actionTypes.ORDER_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        totalItem: 0,
        cart: [],
        response: true
      };
    case actionTypes.UPDATE_RESPONSE:
      return {
        ...state,
        response: false
      };
    case actionTypes.ORDER_FAIL:
      return {
        ...state,
        isLoading: false,
        response: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
