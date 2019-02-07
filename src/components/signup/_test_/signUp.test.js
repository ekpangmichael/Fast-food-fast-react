/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapStateToProps } from '../SignUp';

describe('Signup container', () => {
  let wrapper;
  let preventDefaultSpy;
  const props = {
    isLoading: false,
    signUpUser: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<SignUp {...props} />);
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

  it('should throw the Password did not match error ', () => {
    const preventDefault = jest.fn();
    const form = wrapper.find('.register');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should return updated props', () => {
    const state = {
      signup: {}
    };
    expect(mapStateToProps(state)).toEqual(state.signup);
  });
});
