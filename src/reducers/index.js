import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import signinReducer from './auth/signinReducers';
import getMenu from './homePage/getMenu';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  menu: getMenu
});
