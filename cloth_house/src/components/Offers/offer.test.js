import createComponentWithIntl from '../../utils/helper_snapshot'
import Offers from "./index"

it('Offers Snapshot', () => {
    const component = createComponentWithIntl(<Offers />);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  
  });