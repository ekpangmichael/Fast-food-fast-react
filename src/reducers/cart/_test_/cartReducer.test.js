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

  it('should update totalItem when type.CART_UPDATE is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.CART_UPDATE,
          cart: JSON.parse(localStorage.getItem('cart'))
        }
      )
    ).toBeCalled;
  });

  it('should delete item when type.DELETE_ITEM is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.DELETE_ITEM,
          payload: '1',
          totalItem: initialState.totalItem - 1
        }
      )
    ).toBeCalled;
  });

  it('should update isLoading when type.ORDER_START is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.ORDER_START,
          isLoading: true
        }
      )
    ).toBeCalled;
  });

  it('should update response when type.ORDER_SUCCESS is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.ORDER_SUCCESS,
          isLoading: false,
          totalItem: 0,
          cart: [],
          response: true
        }
      )
    ).toBeCalled;
  });

  it('should update response when type.UPDATE_RESPONSE is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.UPDATE_RESPONSE,
          response: false
        }
      )
    ).toBeCalled;
  });

  it('should update response when type.ORDER_FAIL is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.ORDER_FAIL,
          isLoading: false,
          payload: 'fail'
        }
      )
    ).toBeCalled;
  });

  it('should default to initial state when no actionType is supply', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.FAKE_TYPE
        }
      )
    ).toBeCalled;
  });
});
