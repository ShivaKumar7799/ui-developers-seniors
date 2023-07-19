import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [name,setName] = useState("")
    console.log("useEffect component is rendered")
    useEffect(() => {
        console.log("useEffect hook is rendered")
    },[name])
  return (
    <div>
        UseEffect - {name}
        <input type='text' onChange={(event) => setName(event.target.value) } value={name}  />
    </div>
  )
}

export default UseEffect