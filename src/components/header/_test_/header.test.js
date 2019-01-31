import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';

describe('## App container', () => {
  it('should render App Container', () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find('nav');
    expect(header.length).toEqual(1);
  });
});
