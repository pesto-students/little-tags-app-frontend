export  function startAction() {
   return { 
       type: "rotate",
       payload: true
   }  
};


  export function stopAction() {
   return { type: "rotate",
    payload: false
  }  
};