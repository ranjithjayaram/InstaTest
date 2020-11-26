import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  let props;
  let shallowDashboard;
  let renderedDashboard;
  let mountedDashboard;

  const shallowTestComponent = () => {
    if (!shallowDashboard) {
      shallowDashboard = shallow(<Dashboard {...props} />);
    }
    return shallowDashboard;
  };

  const renderTestComponent = () => {
    if (!renderedDashboard) {
      renderedDashboard = render(<Dashboard {...props} />);
    }
    return renderedDashboard;
  };

  const mountTestComponent = () => {
    if (!mountedDashboard) {
      mountedDashboard = mount(<Dashboard {...props} />);
    }
    return mountedDashboard;
  };  

  beforeEach(() => {
    props = {};
    shallowDashboard = undefined;
    renderedDashboard = undefined;
    mountedDashboard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
