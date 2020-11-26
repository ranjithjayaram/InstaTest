import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SearchPanel from './SearchPanel';

describe('SearchPanel', () => {
  let props;
  let shallowSearchPanel;
  let renderedSearchPanel;
  let mountedSearchPanel;

  const shallowTestComponent = () => {
    if (!shallowSearchPanel) {
      shallowSearchPanel = shallow(<SearchPanel {...props} />);
    }
    return shallowSearchPanel;
  };

  const renderTestComponent = () => {
    if (!renderedSearchPanel) {
      renderedSearchPanel = render(<SearchPanel {...props} />);
    }
    return renderedSearchPanel;
  };

  const mountTestComponent = () => {
    if (!mountedSearchPanel) {
      mountedSearchPanel = mount(<SearchPanel {...props} />);
    }
    return mountedSearchPanel;
  };  

  beforeEach(() => {
    props = {};
    shallowSearchPanel = undefined;
    renderedSearchPanel = undefined;
    mountedSearchPanel = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
