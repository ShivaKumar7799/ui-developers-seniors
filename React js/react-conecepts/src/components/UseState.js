import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        {console.log(count, "useState component")}
        <h1> Count : {count} </h1>
        <button onClick={() => setCount(count + 1)} >+</button>
        <button onClick={handleDecrement} >-</button>
    </div>
  )
}

export default UseState