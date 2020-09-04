export const digitPressed = (data) => {
  return {
    type : "DIGIT_PRESSED",
    payload : data
  }
}

export const operationPressed = (data) => {
  return {
    type : "OPERATION_PRESSED",
    payload : data
  }
}

export const evaluationPressed = (data) => {
  return {
    type : "EVALUATION_PRESSED",
    payload: data
  }
}