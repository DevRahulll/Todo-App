import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            addTodo({ content })
            setContent('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='mb-4'>
            <input
                type="text"
                className="border p-2 w-full mb-2"
                placeholder='Add a new Todo'
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            <button
                type='submit'
                className='bg-blue-400 text-white p-4 rounded hover:bg-blue-500'
            >Add Todo</button>
        </form>
    )
}

export default TodoForm