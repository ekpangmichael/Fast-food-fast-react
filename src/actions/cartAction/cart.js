import * as actionTypes from './actionTypes';

/**
 * @description - cart start actions
 * @returns {object} - cart start action
 */
export const cartCount = (payload) => ({
  type: actionTypes.CART_COUNT,
  payload
});

/**
 * @description - cart start actions
 * @returns {object} - cart start action
 */
export const cartUpdate = () => ({
  type: actionTypes.CART_UPDATE
});

/**
 * @description - cart start actions
 * @returns {object} - cart start action
 */
export const cartCountFail = (payload) => ({
  type: actionTypes.CART_COUNT_FAIL,
  payload
});

/**
 * @description - cart
 * @param {*} totalCart -  object to dispatch
 * @returns {fn} - cart dispatch function
 */
export const updateCount = (totalCart) => async (dispatch) => {
  dispatch(cartCount(totalCart + 1));
};

/**
 * @description - cart
 * @param {*} totalCart -  object to dispatch
 * @returns {fn} - cart dispatch function
 */
export const updateCart = () => async (dispatch) => {
  dispatch(cartUpdate());
};
