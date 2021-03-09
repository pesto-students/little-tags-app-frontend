import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';


function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return  createStore(reducer, applyMiddleware(thunk)).subscribe();
}

export default configureStore;