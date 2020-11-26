import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChatMessage from './ChatMessage';

describe('ChatMessage', () => {
  let props;
  let shallowChatMessage;
  let renderedChatMessage;
  let mountedChatMessage;

  const shallowTestComponent = () => {
    if (!shallowChatMessage) {
      shallowChatMessage = shallow(<ChatMessage {...props} />);
    }
    return shallowChatMessage;
  };

  const renderTestComponent = () => {
    if (!renderedChatMessage) {
      renderedChatMessage = render(<ChatMessage {...props} />);
    }
    return renderedChatMessage;
  };

  const mountTestComponent = () => {
    if (!mountedChatMessage) {
      mountedChatMessage = mount(<ChatMessage {...props} />);
    }
    return mountedChatMessage;
  };  

  beforeEach(() => {
    props = {};
    shallowChatMessage = undefined;
    renderedChatMessage = undefined;
    mountedChatMessage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
