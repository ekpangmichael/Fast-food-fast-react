/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../Footer';

describe('Footer container', () => {
  let wrapper;
  const props = {
    location: '/signin'
  };

  beforeEach(() => {
    wrapper = shallow(<Footer {...props} />);
  });

  it('should find the footer tag', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
