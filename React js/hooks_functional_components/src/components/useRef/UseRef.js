import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function UseRef() {

  const userInputRef = useRef();
  const previousSearchValue = useRef();

  const [searchValue, setSearchValue] = useState("")
  const [previousSearch, setPreviousSearch] = useState("")

  const focusInputField = () => {
    userInputRef.current.focus()
  }

  const getInputField = () => {
    setSearchValue(userInputRef.current.value)
  }

  const resetSearchValue = () => {
    userInputRef.current.value = ""
    setSearchValue("")
  }
  
  console.log("useRef compononet is rendered")

  useEffect(() => {
    previousSearchValue.current = previousSearch
  },[previousSearch])

  return (
    <div>
        UseRef - {searchValue}
        <input id='userName' ref={userInputRef} type='text' 
        // onChange={(event) => setSearchValue(event.target.value) } 
        />
        <button onClick={() => {
          focusInputField()
          }} >Search</button>
        <button onClick={getInputField} >Get Input Field Value</button>
        <button onClick={resetSearchValue} >Reset Search</button>
        <div>
          {previousSearchValue.current}
          <input type='text' value={previousSearch} onChange={(event)=> setPreviousSearch(event.target.value)} ref={previousSearchValue} />
        </div>
    </div>
  )
}

export default UseRef