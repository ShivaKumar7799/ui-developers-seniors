import React from 'react'
import { useRef } from 'react'

function UseRef() {

    const userNameRef = useRef()
    const buttonRef = useRef()

    console.log("useRef component is rendered")

    const focusUserNameInput = () => {
        userNameRef.current.focus()
    //    const userValue =  userNameRef.current.value;
    //    console.log(userValue)
    }

  return (
    <div>
        UseEffect

        <input ref={userNameRef} type='text' />
        <button ref={buttonRef} onClick={focusUserNameInput} >Focus</button>

    </div>
  )
}

export default UseRef