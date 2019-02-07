/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import siginActions from '../signin';
import * as type from '../actionTypes';

describe('Login Act{ions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });
});
