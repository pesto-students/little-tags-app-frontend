import createComponentWithIntl from '../../utils/helper_snapshot'
import Offers from "./index"

it('Agreement Modal Snapshot', () => {
    const component = createComponentWithIntl(<Offers />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });