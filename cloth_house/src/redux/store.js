import { createStore,applyMiddleware,compose } from "redux";
import rotateReducer from "./reducer";
import thunk from 'redux-thunk';
const defaultState={
    rotating:false
}

function configureStore(state = defaultState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rotateReducer,state,composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;