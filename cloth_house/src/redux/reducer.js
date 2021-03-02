


export default function defaultReducer(state, action){
    
    switch (action.type) {
      case "rotate":
        console.log("rotate======>",action)
      return {
          rotating: action.payload
        };
      default:
        return state;
    }
  }