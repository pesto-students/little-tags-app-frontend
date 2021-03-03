import createComponentWithIntl from '../../utils/helper_snapshot'
import Modal from "./index"

it('Agreement Modal Snapshot', () => {
    const component = createComponentWithIntl(<Modal />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });