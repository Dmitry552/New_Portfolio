var initialState = {
  valid: null,
  message: '',
  arr: [true, true],
  Title: '',
  Text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TITLE':
      return {
        ...state,
        Title: action.payload
      }
    case 'REMOVE_TITLE':
      return {
        ...state,
        Title: action.payload
      }
    case 'ADD_TEXT':
      return {
        ...state,
        Text: action.payload
      }
    case 'REMOVE_TEXT':
      return {
        ...state,
        Text: action.payload
      }
    case 'VALID':
      return {
        ...state,
        valid: action.payload.valid,
        message: action.payload.message,
        arr: action.payload.arr
      }
    default: return state;
  }
}