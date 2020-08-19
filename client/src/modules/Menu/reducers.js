var initialState = {
  scroll: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SCROLL':
      return {
        ...state,
        scroll: action.payload
      }
    default: return state;
  }
}