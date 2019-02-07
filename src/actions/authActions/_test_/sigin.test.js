/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import {
  signinStart,
  signinFailure,
  signinSuccess,
  signinUser
} from '../signin';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = `https://fast-food-api.herokuapp.com/api/v1/auth/login`;

describe('Login Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once type.SIGNIN_USER_START is fired`, () => {
    expect(signinStart()).toEqual({
      type: type.SIGNIN_USER_START
    });
  });

  it(`should return an action object once type.SIGNIN_USER_FAILURE, is fired`, () => {
    expect(signinFailure()).toEqual({
      type: type.SIGNIN_USER_FAILURE
    });
  });

  it(`should return an action object once type.SIGNIN_USER_SUCCESS is fired`, () => {
    expect(signinSuccess()).toEqual({
      type: type.SIGNIN_USER_SUCCESS
    });
  });

  it('should call the login start dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    const mockResponse = {
      message: 'Successfully logged in'
    };

    moxios.stubRequest(url, mockResponse);
    await signinUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.SIGNIN_USER_START });
  });
});
