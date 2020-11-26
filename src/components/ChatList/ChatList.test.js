import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChatList from './ChatList';

describe('ChatList', () => {
  let props;
  let shallowChatList;
  let renderedChatList;
  let mountedChatList;

  const shallowTestComponent = () => {
    if (!shallowChatList) {
      shallowChatList = shallow(<ChatList {...props} />);
    }
    return shallowChatList;
  };

  const renderTestComponent = () => {
    if (!renderedChatList) {
      renderedChatList = render(<ChatList {...props} />);
    }
    return renderedChatList;
  };

  const mountTestComponent = () => {
    if (!mountedChatList) {
      mountedChatList = mount(<ChatList {...props} />);
    }
    return mountedChatList;
  };  

  beforeEach(() => {
    props = {};
    shallowChatList = undefined;
    renderedChatList = undefined;
    mountedChatList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
