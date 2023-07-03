import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
        <button className='counterButton' value={props.value} onClick={props.handleCountChange} > {props.name} </button>
    </div>
  )
}

export default Button