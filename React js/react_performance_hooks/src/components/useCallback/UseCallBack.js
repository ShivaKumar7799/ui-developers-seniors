import React, { useCallback } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useState } from 'react'
import Counter1 from '../memo/counter1'

function UseCallBack() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const handleTodo = useCallback((todo) => {
        setTodos([...todos, todo])
    },[todos])
  return (
    <div>
        <AddTodo handleTodo = {handleTodo} />
        <TodoList todos = {todos} />
        <Counter1 count1 = {count} setCount1={setCount} />
    </div>
  )
}

export default UseCallBack