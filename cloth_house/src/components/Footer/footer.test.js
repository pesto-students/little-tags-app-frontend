import createComponentWithIntl from '../../utils/helper_snapshot'
import Footer from "./index"

it('Footer Snapshot', () => {
    const component = createComponentWithIntl(<Footer />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });