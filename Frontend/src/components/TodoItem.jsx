import React from 'react'

function TodoItem({ todo, deleteTodo }) {
    return (
        <div className="flex justify-between items-center mb-2 text-black">
            <span>{todo.content}</span>
            <button
                className='text-red-500 hover:text-red-700'
             onClick={()=>deleteTodo(todo._id)}
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem