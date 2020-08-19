var initialState = {
  navigation: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_COMP':
      return {
        ...state,
        navigation: action.paiload
      };
    default: return state;
  }
}