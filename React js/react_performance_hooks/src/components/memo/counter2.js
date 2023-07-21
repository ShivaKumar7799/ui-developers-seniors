import React, { memo } from 'react'

function Counter2({count2, setCount2}) {
    console.log("counter 2 is rendered")
  return (
    <div>counter2 - {count2} <button onClick={() => setCount2(count2 + 1)} >  +</button> </div>
  )
}

export default memo(Counter2)