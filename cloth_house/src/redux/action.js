export  function startAction() {
   return { 
       type: "rotate",
       payload: true
   }  
};


  export function stopAction() {
   return { 
    type: "rotate",
    payload: false
  }  
};


export function fetchCategories() {
  return { 
   type: "REQUEST_FETCH_CATEGORIES"
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