import React, { memo, useState } from 'react'

function AddTodo({handleTodo}) {
   const [todo,setTodo] = useState("");
   console.log("add todo component is rendered")
  return (
    <div>
        <input type="text" value={todo} onChange={(event) => setTodo(event.target.value) } />
        <button onClick={() => handleTodo(todo)} >Add Todo</button>
    </div>
  )
}

export default memo(AddTodo)