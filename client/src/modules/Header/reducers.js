var initialState = {
  Menu: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'STATE_MENU':
      return {
        ...state,
        Menu: action.payload
      }
    default: return state;
  }
}