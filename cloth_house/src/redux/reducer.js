export default function defaultReducer(state, action){
  console.log("TYPE===>",action.type);
    switch (action.type) {
      case "REQUEST_FETCH_CATEGORIES":  
      return {...state,categories:{loading:true}}
      case "FETCH_CATEGORIES_SUCCESS":
      return {...state,categories:{loading:false,values:action.payload.data}} 
      case "FETCH_CATEGORIES_FAIL":
      return {...state,categories:{loading:false}} 
        default:
        return state;

    }
}  