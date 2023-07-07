import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count , setCount] = useState(0);
    const [wickets, setWickets] = useState(0)
    useEffect(() => {
        console.log("useEffect is called for first time")
        return () => {
            console.log("useEffect with return function")
        }
    },[count, wickets])
  return (
    <div>
        <h1> {count}/ {wickets} </h1>
        <button onClick={() => setCount(count + 1)} >+</button>
        <button onClick={() =>setWickets(wickets + 1)} >Wicket</button>
        {/* <h1>1.when the component loaded for the first time, useEffect is called for first 
            time</h1>
        <h1>2.if we are passing any dependency array, it will be called for first time 
            and if any of the dependency array value is changed, then the function is 
            called again when the dependency value changes</h1>
        <h1>3.if we are not passing any dependency array, it will be called for every time</h1> */}
    </div>
  )
}

export default UseEffect