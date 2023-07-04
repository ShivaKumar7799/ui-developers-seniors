import React, { useState } from 'react'

function CricketScore() {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);

    const handleRunsChange = (event) => {
        setScore(score + Number(event.target.value) )
    }

  return (
    <div>
        <h2>ABC : {score}/{wickets} </h2>
        <button value={1} onClick={handleRunsChange} >1 Run</button>
        <button value={2} onClick={handleRunsChange} >2 Run</button>
        <button value={3} onClick={handleRunsChange} >3 Run</button>
        <button value={4} onClick={handleRunsChange} >4 Run</button>
        <button value={6} onClick={handleRunsChange} >6 Run</button>
        <button onClick={() => setWickets(wickets + 1) } >Wicket</button>
    </div>
  )
}

export default CricketScore