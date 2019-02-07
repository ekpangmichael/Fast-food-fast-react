/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import {
  cartCount,
  cartCountFail,
  cartUpdate,
  updateCart,
  updateCount
} from '../cart';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();

describe('Cart Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once type.CART_START is fired`, () => {
    expect(cartCount()).toEqual({
      type: type.CART_COUNT
    });
  });

  it(`should return an action object once type.CART_COUNT_FAIL, is fired`, () => {
    expect(cartCountFail()).toEqual({
      type: type.CART_COUNT_FAIL
    });
  });

  it(`should return an action object once type.CART_UPDATE is fired`, () => {
    expect(cartUpdate()).toEqual({
      type: type.CART_UPDATE
    });
  });

  it('should call the updateCart dispatch function', async () => {
    moxios.stubRequest();
    await updateCart()(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });

  it('should call the updateCount dispatch function', async () => {
    moxios.stubRequest();
    await updateCount(1)(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });
});
