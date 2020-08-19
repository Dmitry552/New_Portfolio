var initialState = {
  modal_form: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_FORM':
      return {
        modal_form: state.modal_form ? false : true
      };
    default: return state;
  }
}