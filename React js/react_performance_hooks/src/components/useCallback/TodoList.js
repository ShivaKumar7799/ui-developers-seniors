import React, { memo } from 'react'

function TodoList({todos}) {
    console.log("todolist component is rendered")
  return (
    <div>
        TodoList
       {todos.map((todo, index) => <h2 key={index} >{todo}</h2> )} 
    </div>
  )
}

export default memo(TodoList)