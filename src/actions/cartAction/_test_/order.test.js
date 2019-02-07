/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import {
  orderFailure,
  orderStart,
  orderSuccess,
  placeOrder,
  updateResponse,
  deleteItem,
  deleteItemFromcart
} from '../order';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = 'https://fast-food-api.herokuapp.com/api/v1/orders';

describe('Cart Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once type.ORDER_START is fired`, () => {
    expect(orderStart()).toEqual({
      type: type.ORDER_START
    });
  });

  it(`should return an action object once type.ORDER_FAIL, is fired`, () => {
    expect(orderFailure()).toEqual({
      type: type.ORDER_FAIL
    });
  });

  it(`should return an action object once type.ORDER_SUCCESS is fired`, () => {
    expect(orderSuccess()).toEqual({
      type: type.ORDER_SUCCESS
    });
  });

  it(`should return an action object once type.UPDATE_RESPONSE is fired`, () => {
    expect(updateResponse()).toEqual({
      type: type.UPDATE_RESPONSE
    });
  });

  it(`should return an action object once type.DELETE_ITEM is fired`, () => {
    expect(deleteItem()).toEqual({
      type: type.DELETE_ITEM
    });
  });
});
