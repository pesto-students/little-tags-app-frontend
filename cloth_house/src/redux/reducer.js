const defaultState={
  categories:{
    categorydata:{},
    loading:false
  }
}

export default function reducer(state = defaultState, action){
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