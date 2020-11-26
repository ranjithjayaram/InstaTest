import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UserChats from './UserChats';

describe('UserChats', () => {
  let props;
  let shallowUserChats;
  let renderedUserChats;
  let mountedUserChats;

  const shallowTestComponent = () => {
    if (!shallowUserChats) {
      shallowUserChats = shallow(<UserChats {...props} />);
    }
    return shallowUserChats;
  };

  const renderTestComponent = () => {
    if (!renderedUserChats) {
      renderedUserChats = render(<UserChats {...props} />);
    }
    return renderedUserChats;
  };

  const mountTestComponent = () => {
    if (!mountedUserChats) {
      mountedUserChats = mount(<UserChats {...props} />);
    }
    return mountedUserChats;
  };  

  beforeEach(() => {
    props = {};
    shallowUserChats = undefined;
    renderedUserChats = undefined;
    mountedUserChats = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
