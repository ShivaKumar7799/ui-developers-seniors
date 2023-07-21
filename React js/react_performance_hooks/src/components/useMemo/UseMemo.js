import React, {useMemo, useState} from 'react'
import ShowMarks from './ShowMarks';
import Counter1 from '../memo/counter1';

function UseMemo() {
    const [marks, setMarks] = useState([35,45,54,35,23,53]);
    const [subjectMark, setSubjectMark] = useState("")
  
    const [count,setCount] = useState(0)
  
    const calculateMarks = (marks) => {
      
    let total = 0;
      console.log("marks calculated")
      marks.forEach((item,index) => total = total + item )
      return total
    }
     const totalMarks =  useMemo(() =>  {
      for(let i =1; i < 100000000; i++){
        console.log(i)
      }
      return calculateMarks(marks)
     } , [marks])

    //      const totalMarks = () =>  {
    //   for(let i =1; i < 100000; i++){
    //     console.log(i)
    //   }
    //   return calculateMarks(marks)
    //  } 


    //  marks.forEach((item,index) => total = total + item )
    //  console.log(totalMarks)
  
    console.log("app component is rendered")
  return (
    <div>
      {totalMarks()}
    <input type='text' value={subjectMark} onChange={(event) => setSubjectMark(Number(event.target.value)) } />
    <button onClick={() => {
      setMarks([...marks, subjectMark ]);
      setSubjectMark("")
      }} >Add Subjet </button>
    <h2>Total marks : <ShowMarks total = {totalMarks} /> </h2>
    <Counter1 count1 = {count} setCount1={setCount} />
 </div>
  )
}

export default UseMemo