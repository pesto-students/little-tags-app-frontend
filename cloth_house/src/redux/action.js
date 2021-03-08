export function fetchCategories() {
  return { 
   type: "FETCH_CATEGORIES_REQUESTS"
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