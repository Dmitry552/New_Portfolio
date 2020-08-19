import { 
  OPEN_CLOSE_CANVAS_BLOCK, 
  WINDOW_SIZES
}  from '../actionTypes';

export var window_size = () => (dispatch) => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  return dispatch({
    type: WINDOW_SIZES,
    payload: {width, height}
  });
  
}

export var canvas_block = () => (dispatch) => {
  const scroll = window.pageYOffset;
  console.log(scroll);
  return dispatch({
    type: OPEN_CLOSE_CANVAS_BLOCK,
    payload: scroll < 30 ? true : false
  })
}