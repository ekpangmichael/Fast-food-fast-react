import { combineReducers } from 'redux';
import signupReducer from './auth/signupReducer';
import signinReducer from './auth/signinReducers';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer
});
