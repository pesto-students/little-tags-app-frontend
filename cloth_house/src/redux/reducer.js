


export default function defaultReducer(state, action){
    
    switch (action.type) {
      case "rotate":
      return {
          rotating: action.payload
        };
      default:
        return state;
    }
  }