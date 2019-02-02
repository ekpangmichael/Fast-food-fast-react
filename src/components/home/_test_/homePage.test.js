import { shallow } from 'enzyme';
import React from 'react';
import HomePage from '../HomePage';

describe('## Homepage container', () => {
  it('should render Homepage Container', () => {
    const wrapper = shallow(<HomePage />);
    const home = wrapper.find('section');
    expect(home.length).toEqual(2);
  });
});