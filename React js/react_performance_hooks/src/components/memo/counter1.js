import React, { memo } from 'react'

function Counter1({count1, setCount1}) {
    console.log("counter 1 is rendered")
  return (
    <div>counter1 - {count1} <button onClick={() => setCount1(count1 + 1)} >  +</button> </div>
  )
}

export default memo(Counter1)