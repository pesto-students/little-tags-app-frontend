export function fetchCategories() {
  return { 
   type: "FETCH_CATEGORIES_REQUEST"
 }  
};

export function fetchCategoriesSuccess(payload) {
  return { 
   type: "FETCH_CATEGORIES_SUCCESS",
   payload:payload
 }  
};

export function fetchCategoriesFailure() {
  return { 
   type: "FETCH_CATEGORIES_FAIL"
 }  
};

export function addToCart(payload){
    return {
      type: "ADD_TO_CART",
      payload:payload
    };
}

export function removeFromCart(payload){
  return {
    type: "REMOVE_FROM_CART",
    payload:payload
  };
}

export function viewCart(payload){
  return {
    type: "VIEW_CART"
  };
}

export function addToWishlist(payload){

return {
  type:"ADD_TO_WISHLIST",
  payload
}

}



export function  removeFromWishlist(payload){
  return {
    type:"REMOVE_FROM_WISHLIST",
    payload
  }
}