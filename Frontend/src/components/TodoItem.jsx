import React, { useState } from 'react'

function TodoItem({ todo, updateTodo, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState(todo.content);


    const handleEdit = () => {
        setIsEditing(true)
    };
    
    const handleSave = () => {
        updateTodo(todo._id, editedContent);
        setIsEditing(false)
    };

    const handleCancel=()=>{
        setEditedContent(todo.content)
        setIsEditing(false)
    }
    return (
        <div className="flex justify-between items-center mb-2 text-black">
            <div className="flex-1">
            {isEditing ? (
                <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className='border p-2 w-full'
                />
            ) : (
                <span>{todo.content}</span>)}
            </div>
            <div className='flex space-x-2 ml-4'>
                {isEditing ? (
                    <>
                    <button
                        onClick={handleSave}
                        className='text-green-500 hover:text-green-700 mr-2'
                    >Save</button>
                    <button
                        onClick={handleCancel}
                        className='text-red-500 hover:text-red-700 mr-2'
                    >Cancel</button>
                    </>
                ) :
                    (
                        <button
                            onClick={handleEdit}
                            className='text-blue-500 hover:text-blue-700 mr-2'
                        >Edit</button>
                    )
                }
            </div>
            <button
                className='text-red-500 hover:text-red-700'
                onClick={() => deleteTodo(todo._id)}
            >
                Delete
            </button>
        </div>
    )
}

export default TodoItem