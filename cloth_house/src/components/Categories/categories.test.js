import createComponentWithIntl from '../../utils/helper_snapshot'
import Categories from "./index"

it('Categories Snapshot', () => {
    const component = createComponentWithIntl(<Categories />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });