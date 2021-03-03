import React from 'react'
import renderer from 'react-test-renderer'
import {IntlProvider} from 'react-intl'
import English from "../lang/en-US.json";

global.matchMedia = global.matchMedia || function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

function createComponentWithIntl (children, props)  {

    return renderer.create(<IntlProvider defaultLocale="en-US"  locale="en-US" messages={English} >{children}</IntlProvider>)
}

export default createComponentWithIntl