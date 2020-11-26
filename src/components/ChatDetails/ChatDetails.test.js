import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChatDetails from './ChatDetails';

describe('ChatDetails', () => {
  let props;
  let shallowChatDetails;
  let renderedChatDetails;
  let mountedChatDetails;

  const shallowTestComponent = () => {
    if (!shallowChatDetails) {
      shallowChatDetails = shallow(<ChatDetails {...props} />);
    }
    return shallowChatDetails;
  };

  const renderTestComponent = () => {
    if (!renderedChatDetails) {
      renderedChatDetails = render(<ChatDetails {...props} />);
    }
    return renderedChatDetails;
  };

  const mountTestComponent = () => {
    if (!mountedChatDetails) {
      mountedChatDetails = mount(<ChatDetails {...props} />);
    }
    return mountedChatDetails;
  };  

  beforeEach(() => {
    props = {};
    shallowChatDetails = undefined;
    renderedChatDetails = undefined;
    mountedChatDetails = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
