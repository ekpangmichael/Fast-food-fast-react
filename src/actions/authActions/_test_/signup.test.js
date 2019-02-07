/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
  signUpUser
} from '../signup';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = `https://fast-food-api.herokuapp.com/api/v1/auth/signup`;

describe('Signup Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once type.SIGNUP_USER_START is fired`, () => {
    expect(signUpStart()).toEqual({
      type: type.SIGNUP_USER_START
    });
  });

  it(`should return an action object once type.SIGNUP_USER_FAILURE, is fired`, () => {
    expect(signUpFailure()).toEqual({
      type: type.SIGNUP_USER_FAILURE
    });
  });

  it(`should return an action object once type.SIGNUP_USER_SUCCESS is fired`, () => {
    expect(signUpSuccess()).toEqual({
      type: type.SIGNUP_USER_SUCCESS
    });
  });

  it('should call the signup start dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    const mockResponse = {
      message: 'Registration successful'
    };

    moxios.stubRequest(url, mockResponse);
    await signUpUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.SIGNUP_USER_START });
  });
});
