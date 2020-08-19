export var Title_ = title => ({
  type: 'ADD_TITLE',
  payload: title
})

export var remove_Title = title => ({
  type: 'REMOVE_TITLE',
  payload: ''
})

export var Txt = txt => ({
  type: 'ADD_TEXT',
  payload: txt
})

export var remove_Txt = txt => ({
  type: 'REMOVE_TEXT',
  payload: ''
})

export var Valid = valid => ({
  type: 'VALID',
  payload: valid
})