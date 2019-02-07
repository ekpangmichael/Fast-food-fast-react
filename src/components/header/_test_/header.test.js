/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { Header, mapStateToProps } from '../Header';

describe('Header container', () => {
  let wrapper;

  const props = {
    totalItem: 10
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should have the header container to have rendered', () => {
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('should click the logout link', () => {
    window.localStorage.removeItem('fastFoodToken');
    localStorage.setItem('fastFoodToken', 'dhadjhadkgj');
    wrapper.instance().logout();
    localStorage.removeItem('fastFoodToken');
  });

  it('should return updated props', () => {
    const state = {
      cart: { item: '1' }
    };
    expect(mapStateToProps(state)).toEqual(state.cart);
  });
});
