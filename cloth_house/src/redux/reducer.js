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


function addItems(state,payload){
    let newcartitem=state.items.filter(x => x.id == payload.id);
    let newItems = state.items.filter(item => item.id !== payload.id)
    let newitem={...payload,count:newcartitem.length>0?newcartitem[0].count+1:1};

    return [...newItems, newitem];
}

function removeItems(state,payload){
 console.log("removeItems=====>",{payload},"====>",{state}); 
  let newcartitem=state.items.filter(x => x.id == payload.id);
  let newItems = state.items.filter(item => item.id !== payload.id)
  if(payload&&payload.remove){
    console.log("newItems=====>",newItems);
    return [...newItems]
  }
  else if(newcartitem.length>0 && newcartitem[0].count>1){
    let newitem={...payload,count:newcartitem.length>0?newcartitem[0].count-1:1};
    return [...newItems, newitem];
  }else{
    return [...newItems];
  }
  
}

function cartreducer(state = defaultCart, action){
  
  console.log("TYPE===>",action.type);
    switch (action.type) {
      case "ADD_TO_CART":
        return { 
          ...state,
          items: addItems(state,action.payload)
      }
      case "REMOVE_FROM_CART":
        let item=action.payload;
        return { 
          ...state,
          items: removeItems(state,action.payload)
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