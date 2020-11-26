import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  let props;
  let shallowSidebar;
  let renderedSidebar;
  let mountedSidebar;

  const shallowTestComponent = () => {
    if (!shallowSidebar) {
      shallowSidebar = shallow(<Sidebar {...props} />);
    }
    return shallowSidebar;
  };

  const renderTestComponent = () => {
    if (!renderedSidebar) {
      renderedSidebar = render(<Sidebar {...props} />);
    }
    return renderedSidebar;
  };

  const mountTestComponent = () => {
    if (!mountedSidebar) {
      mountedSidebar = mount(<Sidebar {...props} />);
    }
    return mountedSidebar;
  };  

  beforeEach(() => {
    props = {};
    shallowSidebar = undefined;
    renderedSidebar = undefined;
    mountedSidebar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
