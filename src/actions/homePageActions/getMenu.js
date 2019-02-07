import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * @description - loadMenu start actions
 * @returns {object} - loadMenu start action
 */
export const loadMenuStart = () => ({
  type: actionTypes.LOAD_MENU_START
});

/**
 * @description - loadMenu success actions
 * @param {*} payload - success response
 * @returns {object} - loadMenu success action
 */
export const loadMenuSuccess = (payload) => ({
  type: actionTypes.LOAD_MENU_SUCCESS,
  payload
});

/**
 * @description - loadMenu failure actions
 * @param {*} payload - failure response
 * @returns {object} - loadMenu start action
 */
export const loadMenuFailure = (payload) => ({
  type: actionTypes.LOAD_MENU_FAILURE,
  payload
});

/**
 * @description - loadMenu user
 * @param {*} user - user object to dispatch
 * @returns {fn} - loadMenu dispatch function
 */
export const loadMenu = () => async (dispatch) => {
  dispatch(loadMenuStart());
  try {
    const res = await axios.get(
      'https://fast-food-api.herokuapp.com/api/v1/menu'
    );
    dispatch(loadMenuSuccess(res.data.rows));
  } catch (err) {
    dispatch(loadMenuFailure(err));
  }
};
