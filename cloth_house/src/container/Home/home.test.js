import createComponentWithIntl from '../../utils/helper_snapshot'
import Home from "./index"

it('Home Snapshot', () => {
    const component = createComponentWithIntl(<Home />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });