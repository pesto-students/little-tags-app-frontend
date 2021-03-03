import createComponentWithIntl from '../../utils/helper_snapshot'
import NotFound from "./index"

it('Not Found Snapshot', () => {
    const component = createComponentWithIntl(<NotFound />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });