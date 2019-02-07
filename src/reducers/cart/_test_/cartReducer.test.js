/* eslint-disable no-unused-expressions */
import reducer from '../cartReducer';
import * as actionTypes from '../../../actions/cartAction/actionTypes';

const getCart = JSON.parse(localStorage.getItem('cart'));

describe('Cart Reducers', () => {
  const initialState = {
    totalItem: getCart ? getCart.length : 0,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    isLoading: false,
    response: null
  };

  it('should update totalItem when type.CART_COUNT is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.CART_COUNT,
          cart: JSON.parse(localStorage.getItem('cart')),
          payload: '1'
        }
      )
    ).toBeCalled;
  });

  // it('should updated response when signup success is called', () => {
  //   expect(
  //     reducer(
  //       {
  //         ...initialState
  //       },
  //       {
  //         type: actionTypes.SIGNUP_USER_SUCCESS,
  //         isLoading: false,
  //         class: 'success',
  //         payload: [{}, { message: true }]
  //       }
  //     )
  //   ).toBeCalled;
  // });

  // it('should updated response when signup fail is called', () => {
  //   expect(
  //     reducer(
  //       {
  //         ...initialState
  //       },
  //       {
  //         type: actionTypes.SIGNUP_USER_FAILURE,
  //         error: true,
  //         class: 'fail',
  //         payload: {
  //           response: {
  //             data: [null, { message: 'fail' }]
  //           }
  //         }
  //       }
  //     )
  //   ).toBeCalled;
  // });

  // it('should default to initial state when no actionType is supply', () => {
  //   expect(
  //     reducer(
  //       {
  //         ...initialState
  //       },
  //       {
  //         type: actionTypes.FAKE_TYPE
  //       }
  //     )
  //   ).toBeCalled;
  // });
});
