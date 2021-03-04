import createComponentWithIntl from '../../utils/helper_snapshot'
import Signup from "./index"

it('Signup Snapshot', () => {
    const component = createComponentWithIntl(<Signup />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });