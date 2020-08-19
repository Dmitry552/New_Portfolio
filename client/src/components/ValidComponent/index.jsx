import React from 'react'
import './ValidComponent.scss'

export const Allert = ({message, valid}) => {
 const color = (valid) => {
  if(valid) {
    return 'green'
  } else {
    return 'red'
  }
 }
  return (
    <div className="alert" style={{boxShadow: `inset 0px 0px 20px 0px ${color(valid)}`}}>
      <p>{message}</p>
    </div>
  )
}