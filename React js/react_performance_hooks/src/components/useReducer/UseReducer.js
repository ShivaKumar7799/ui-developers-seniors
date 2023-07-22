import React, { useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case "fourRuns" : {
            return {
                ...state,
                score : state.score + action.payload,
                sachinScore : state.sachinScore + action.payload
            }
        }
        default : {
            return state
        }
    }
}

function UseReducer() {
    const initialState = {
        score : 327,
        wicktes : 6,
        sachinScore : 78
    }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
       <h1>Ind: {state.score}/ {state.wicktes} </h1>
       <h2>Sachin Score : {state.sachinScore} </h2>
       <button onClick={()=> dispatch({type : "fourRuns" , payload : 4})} >Four Runs</button>
    </div>
  )
}

export default UseReducer