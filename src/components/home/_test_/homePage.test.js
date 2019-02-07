/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import { HomePage, mapStateToProps } from '../HomePage';

describe('Homepage container', () => {
  let wrapper;

  const props = {
    loadMenu: jest.fn(),
    isLoading: false,
    updateCount: jest.fn(),
    updateCart: jest.fn(),
    response: [{ name: 'chicken', price: '200', id: 2, imageUrl: 'image.jpg' }]
  };
  beforeEach(() => {
    wrapper = shallow(<HomePage {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('it should render the homepage Component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should call the ', () => {
    wrapper.find('.button-sm').simulate('click');
    wrapper.instance()._addToCart();
  });

  it('should return updated props', () => {
    const state = {
      menu: { item: 'Rice and Chicken' }
    };
    expect(mapStateToProps(state)).toEqual(state.menu);
  });
});
