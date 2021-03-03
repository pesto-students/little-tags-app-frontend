import createComponentWithIntl from '../../utils/helper_snapshot'
import Forgot from "./index"

it('Forgot Password Snapshot', () => {
    const component = createComponentWithIntl(<Forgot />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });