import { createStore,applyMiddleware,compose ,combineReducers} from "redux";
import allReducers from "./reducer";
import thunk from 'redux-thunk';



function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return  createStore(allReducers, applyMiddleware(thunk));
}

export default configureStore;