import createComponentWithIntl from '../../utils/helper_snapshot'
import TopHeader from "./index"

it('Header Snapshot', () => {
    const component = createComponentWithIntl(<TopHeader />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });