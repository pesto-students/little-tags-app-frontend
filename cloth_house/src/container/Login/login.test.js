import createComponentWithIntl from '../../utils/helper_snapshot'
import Login from "./index"

it('Login Snapshot', () => {
    const component = createComponentWithIntl(<Login />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });