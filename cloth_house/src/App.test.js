import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
// import ErrorBoundary from "./Hoc/ErrorBoundary";
// import Routes from "./route";
// import { IntlProvider, intlShape } from "react-intl";

// Create IntlProvider to retrieve React Intl context
// const intlProvider = new IntlProvider(
//   {
//     locale: "en",
//     messages: {
//       message1: "Hello world"
//     }
//   },
//   {}
// );
// const { intl } = intlProvider.getChildContext();

// // `intl` prop is required when using injectIntl HOC
// const nodeWithIntlProp = node => React.cloneElement(node, { intl });

// // shallow() with React Intl context
// global.shallowWithIntl = (node, { context, ...options } = {}) => {
//   return shallow(nodeWithIntlProp(node), {
//     ...options,
//     context: {
//       ...context,
//       intl
//     }
//   });
// };
// // mount() with React Intl context
// global.mountWithIntl = (
//   node,
//   { context, childContextTypes, ...options } = {}
// ) => {
//   return mount(nodeWithIntlProp(node), {
//     ...options,
//     context: {
//       ...context,
//       intl
//     },
//     childContextTypes: {
//       intl: intlShape,
//       ...childContextTypes
//     }
//   });
// };

it('Route Snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


//module.exports = Intl;


// it('Error Boundary Snapshot', () => {
//   const tree = renderer.create(<ErrorBoundary />).toJSON();
//   expect(tree).toMatchSnapshot();
// });