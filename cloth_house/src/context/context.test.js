import createComponentWithIntl from '../utils/helper_snapshot'
import {LangProvider} from "./LangContext" 

it('App Snapshot', () => {
    const component = createComponentWithIntl(<LangProvider />);
    let tree = component.toJSON()
  
    expect(tree).toMatchSnapshot()
  
  });