import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * @description - Signup start actions
 * @returns {object} - signup start action
 */
export const signUpStart = () => ({
  type: actionTypes.SIGNUP_USER_START
});

/**
 * @description - Signup success actions
 * @param {*} payload - success response
 * @returns {object} - signup sucess action
 */
export const signUpSuccess = (payload) => ({
  type: actionTypes.SIGNUP_USER_SUCCESS,
  payload
});

/**
 * @description - Signup failure actions
 * @param {*} payload - failure response
 * @returns {object} - signup start action
 */
export const signUpFailure = (payload) => ({
  type: actionTypes.SIGNUP_USER_FAILURE,
  payload
});

/**
 * @description - Signup user
 * @param {*} user - user object to dispatch
 * @returns {fn} - signup dispatch function
 */
export const signUpUser = (user) => async (dispatch) => {
  const data = {
    ...user
  };
  dispatch(signUpStart());
  try {
    const res = await axios.post(
      'https://fast-food-api.herokuapp.com/api/v1/auth/signup',
      data
    );
    dispatch(signUpSuccess(res.data));
  } catch (err) {
    dispatch(signUpFailure(err));
  }
};
