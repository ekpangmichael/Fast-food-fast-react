import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import signinReducer from './auth/signinReducers';
import getMenu from './homePage/getMenu';
import cart from './cart/cartReducer';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  menu: getMenu,
  cart: cart
});
