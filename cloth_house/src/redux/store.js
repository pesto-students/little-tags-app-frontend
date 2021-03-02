import { createStore } from "redux";
import rotateReducer from "./reducer";
const defaultState={
    rotating:false
}
function configureStore(state = defaultState) {
  return createStore(rotateReducer,state);
}

export default configureStore;