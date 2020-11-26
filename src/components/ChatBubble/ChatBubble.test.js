import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChatBubble from './ChatBubble';

describe('ChatBubble', () => {
  let props;
  let shallowChatBubble;
  let renderedChatBubble;
  let mountedChatBubble;

  const shallowTestComponent = () => {
    if (!shallowChatBubble) {
      shallowChatBubble = shallow(<ChatBubble {...props} />);
    }
    return shallowChatBubble;
  };

  const renderTestComponent = () => {
    if (!renderedChatBubble) {
      renderedChatBubble = render(<ChatBubble {...props} />);
    }
    return renderedChatBubble;
  };

  const mountTestComponent = () => {
    if (!mountedChatBubble) {
      mountedChatBubble = mount(<ChatBubble {...props} />);
    }
    return mountedChatBubble;
  };  

  beforeEach(() => {
    props = {};
    shallowChatBubble = undefined;
    renderedChatBubble = undefined;
    mountedChatBubble = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
