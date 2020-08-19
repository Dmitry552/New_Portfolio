import { CHANGE_SCROLL}  from '../actionTypes'

export var change_scroll = (e) => (dispatch) => {
  console.log('e', e)

  const scroll = document.getElementsByClassName(e)[1].getBoundingClientRect()
  console.log(scroll.top)
  return dispatch({
    type: CHANGE_SCROLL,
    payload: scroll
  })
}