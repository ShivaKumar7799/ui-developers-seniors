import React, {useState, } from 'react'
import Counter1 from './counter1';
import Counter2 from './counter2';

function Memo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0)
  return (
    <div>
    <Counter1 count1 = {count1} setCount1 = {setCount1} />
    <Counter2 count2 = {count2} setCount2 = {setCount2} />
   </div>
  )
}

export default Memo