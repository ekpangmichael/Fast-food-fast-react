/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import { SignIn, mapStateToProps } from '../Signin';

describe('Signin container', () => {
  let wrapper;
  let preventDefaultSpy;
  const props = {
    loadMenu: jest.fn(),
    isLoading: false,
    updateCount: jest.fn(),
    updateCart: jest.fn(),
    signinUser: jest.fn(),
    response: [{ name: 'chicken', price: '200', id: 2, imageUrl: 'image.jpg' }]
  };
  beforeEach(() => {
    wrapper = shallow(<SignIn {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('it should render the signin Component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should  call onChange function', () => {
    const e = {
      target: {
        id: 7
      }
    };
    wrapper.instance().onChange(e);
  });

  it('should call the submit', () => {
    wrapper.setProps({
      onSubmit: jest.fn()
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('.register');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should return updated props', () => {
    const state = {
      signin: {}
    };
    expect(mapStateToProps(state)).toEqual(state.signin);
  });
});
