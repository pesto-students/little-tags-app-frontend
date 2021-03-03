
import App from './App';
import Enzyme,{ shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import createComponentWithIntl from './utils/helper_snapshot'


global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

it('App Snapshot', () => {
  const component = createComponentWithIntl(<App />);
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()

});

test('app main should be rendered', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

// describe("<AppScreen/>",()=>{
//   it('allows us to set props', () => {
//     const wrapper = mount(<App bar="baz" />);
//     expect(wrapper.props().bar).to.equal('baz');
//     wrapper.setProps({ bar: 'foo' });
//     expect(wrapper.props().bar).to.equal('foo');
//   });
// })
//module.exports = Intl;

