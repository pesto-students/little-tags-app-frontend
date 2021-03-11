import { combineReducers} from "redux";
const _ = require("lodash");

const defaultState={
  categories:{
    categorydata:{},
    loading:false
  }
}

var cartitems=[];
let defaultCart={
  items:[]
}

function reducer(state = defaultState, action){
  console.log("TYPE===>",action.type);
    switch (action.type) {
      case "FETCH_CATEGORIES_REQUEST":  
      return {...state,categories:{loading:true}}
      case "FETCH_CATEGORIES_SUCCESS":
      return {...state,categories:{loading:false,categorydata:action.payload}} 
      case "FETCH_CATEGORIES_FAIL":
      return {...state,categories:{loading:false}} 
        default:
        return state;

    }
} 


function cartreducer(state = defaultCart, action){
  
  console.log("TYPE===>",action.type);
    switch (action.type) {
      case "ADD_TO_CART":
        return { 
          ...state,
          items: [...state.items, action.payload]
      }
      case "VIEW_CART":
        return state;
        default:
        return state;

    }
}

const allReducers = combineReducers({
  //we access this by any key we want
  catdata : reducer,
  cart : cartreducer
})

export default allReducers;