import axios from 'axios';
import * as actionTypes from './actionTypes';
import { updateCount, updateCart } from './cart';

/**
 * @description - order start actions
 * @returns {object} - order start action
 */
export const orderStart = () => ({
  type: actionTypes.ORDER_START
});

/**
 * @description - order success actions
 * @param {*} payload - success response
 * @returns {object} - order sucess action
 */
export const orderSuccess = (payload) => ({
  type: actionTypes.ORDER_SUCCESS,
  payload
});

/**
 * @description - order failure actions
 * @param {*} payload - failure response
 * @returns {object} - order start action
 */
export const orderFailure = (payload) => ({
  type: actionTypes.ORDER_FAIL,
  payload
});

/**
 * @description - order failure actions
 * @param {*} payload - failure response
 * @returns {object} - order start action
 */
export const updateResponse = () => ({
  type: actionTypes.UPDATE_RESPONSE
});

/**
 * @description - order failure actions
 * @param {*} payload - failure response
 * @returns {object} - order start action
 */
export const deleteItem = (payload) => ({
  type: actionTypes.DELETE_ITEM,
  payload
});

export const deleteItemFromcart = (id) => async (dispatch) => {
  const getCart = JSON.parse(localStorage.getItem('cart'));
  const updatedCart = getCart.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  dispatch(deleteItem(updatedCart));
};
/**
 * @description - order user
 * @param {*} order - order object to dispatch
 * @returns {fn} - order dispatch function
 */
export const placeOrder = (order) => async (dispatch) => {
  const data = {
    userId: JSON.parse(localStorage.getItem('userData'))[0].id,
    orders: order
  };

  console.log(data);
  const token = localStorage.getItem('fastFoodToken');
  const headers = {
    authorization: token
  };
  dispatch(orderStart());
  try {
    const res = await axios.post(
      'https://fast-food-api.herokuapp.com/api/v1/orders',
      data,
      { headers }
    );
    dispatch(orderSuccess(res.data));
    localStorage.removeItem('cart');
    dispatch(updateResponse());
  } catch (err) {
    dispatch(orderFailure(err));
  }
};
