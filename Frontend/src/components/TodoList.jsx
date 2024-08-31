import React from 'react'
import TodoItem from './TodoItem.jsx'

function TodoList({todos,deleteTodo}) {
  return (
    <div className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-4">
        {todos.map(todo=>(
            <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}

export default TodoList