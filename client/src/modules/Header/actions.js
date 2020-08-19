export var canvas = style => ({
  type: 'STYLES_CAN',
  payload: style
})

export var menu = value => ({
  type: 'STATE_MENU',
  payload: value
})