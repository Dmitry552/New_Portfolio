import { 
  WINDOW_SIZES, 
  OPEN_CLOSE_CANVAS_BLOCK
} from '../actionTypes';

var initialState = {
  style: {},
  bool: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_SIZES:
      return {
        ...state,
        style: {
          height: action.payload.height,
          width: action.payload.width
        }
      }
    case OPEN_CLOSE_CANVAS_BLOCK:
      return {
        ...state,
        bool: action.payload
      }
    default: return state;
  }
}