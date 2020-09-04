const initialState = { 
  digit1 : "",
  digit2 : "",
  operator : "",
  result : "",
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DIGIT_PRESSED": {
      if(state.operator === ""){
        if(state.digit1 === "0" && action.payload === 0){
          return {
            ...state,
          }
        }
        return {
          ...state,
          digit1: state.digit1.concat(action.payload)
        }
      }
      return {
        ...state,
          digit2: state.digit2.concat(action.payload)
      }
    }
    case "OPERATION_PRESSED": {
      if(action.payload === "clear"){
        return { 
          ...state, 
          digit1 : "", digit2 : "", operator : "", result : "" }
      }
      return {
        ...state,
        operator: action.payload,
        digit1: "",
        result: state.digit1
      }
    }
    case "EVALUATION_PRESSED": {
      if (action.payload === "plus"){
        return {
          ...state,
          digit1: "", digit2: "", operator: "",
          result: parseInt(state.result) + parseInt(state.digit2)
        }
      } else if (action.payload === "minus"){
        return {
          ...state,
          digit1: "", digit2: "", operator: "",
          result: parseInt(state.result) - parseInt(state.digit2)
        }
      } else if (action.payload === "multiply"){
        return {
          ...state,
          digit1: "", digit2: "", operator: "",
          result: parseInt(state.result) * parseInt(state.digit2)
        }
      } else if (action.payload === "divide"){
        const result = (parseInt(state.result) / parseInt(state.digit2)).toPrecision(3)
        return {
          ...state,
          digit1: "", digit2: "", operator: "",
          result
        }
      }
      return { ...state }
    }
    default:
      return {
        ...state
      };
  }
}