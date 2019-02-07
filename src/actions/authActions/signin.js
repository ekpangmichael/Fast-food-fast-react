import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * @description - signin start actions
 * @returns {object} - signin start action
 */
export const signinStart = () => ({
  type: actionTypes.SIGNIN_USER_START
});

/**
 * @description - signin success actions
 * @param {*} payload - success response
 * @returns {object} - signin sucess action
 */
export const signinSuccess = (payload) => ({
  type: actionTypes.SIGNIN_USER_SUCCESS,
  payload
});

/**
 * @description - signin failure actions
 * @param {*} payload - failure response
 * @returns {object} - signin start action
 */
export const signinFailure = (payload) => ({
  type: actionTypes.SIGNIN_USER_FAILURE,
  payload
});

/**
 * @description - signin user
 * @param {*} user - user object to dispatch
 * @returns {fn} - signin dispatch function
 */
export const signinUser = (user) => async (dispatch) => {
  const data = {
    ...user
  };
  dispatch(signinStart());
  try {
    const res = await axios.post(
      'https://fast-food-api.herokuapp.com/api/v1/auth/login',
      data
    );
    localStorage.setItem('userData', JSON.stringify(res.data[2].rows));
    localStorage.setItem('fastFoodToken', res.data[1].token);
    dispatch(signinSuccess(res.data));
    window.location.href = '/';
  } catch (err) {
    dispatch(signinFailure(err));
  }
};
