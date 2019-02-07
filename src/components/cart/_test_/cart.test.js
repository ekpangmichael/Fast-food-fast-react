/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import { Cart, mapStateToProps } from '../Cart';

describe('Cart container', () => {
  let wrapper;

  const props = {
    _placeOrder: jest.fn(),
    totalPrice: 0,
    response: null,
    isLoading: false,
    _deleteItem: jest.fn(),
    deleteItemFromcart: jest.fn(),
    cart: [{ name: 'chicken', price: '200', id: 2, imageUrl: 'image.jpg' }]
  };
  beforeEach(() => {
    wrapper = shallow(<Cart {...props} />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('it should render the cart Component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should call the place Order function', () => {
    wrapper.instance()._placeOrder();
  });
  it('should call the delete item function', () => {
    wrapper.instance()._deleteItem();
  });

  it('should return updated props', () => {
    const state = {
      cart: { item: 'Rice and Chicken' }
    };
    expect(mapStateToProps(state)).toEqual(state.cart);
  });
});
