/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import {
  loadMenu,
  loadMenuFailure,
  loadMenuStart,
  loadMenuSuccess
} from '../getMenu';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = 'https://fast-food-api.herokuapp.com/api/v1/menu';

describe('Menu Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once type.LOAD_MENU_START is fired`, () => {
    expect(loadMenuStart()).toEqual({
      type: type.LOAD_MENU_START
    });
  });

  it(`should return an action object once type.LOAD_MENU_FAILURE, is fired`, () => {
    expect(loadMenuFailure()).toEqual({
      type: type.LOAD_MENU_FAILURE
    });
  });

  it(`should return an action object once type.LOAD_MENU_SUCCESS is fired`, () => {
    expect(loadMenuSuccess()).toEqual({
      type: type.LOAD_MENU_SUCCESS
    });
  });

  it('should call the dloadmenu dispatch function', async () => {
    const mockResponse = {
      message: 'Order placed successful'
    };
    moxios.stubRequest(url, mockResponse);
    await loadMenu()(dispatchFn);
    expect(dispatchFn).toBeCalled();
  });

  // it('should call the placeorder dispatch function', async () => {
  //   const fakeOder = {
  //     name: faker.name.findName(),
  //     price: faker.name.findName()
  //   };
  //   const mockResponse = {
  //     message: 'Successfully logged in'
  //   };

  //   moxios.stubRequest(url, mockResponse);
  //   await placeOrder(fakeOder)(dispatchFn);
  //   expect(dispatchFn).toBeCalled();
  //   expect(dispatchFn).toBeCalledWith({ type: type.ORDER_START });
  // });
});
