import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/list')
      .then(response => {
        if (response.data.success) {
          setTodos(response.data.getTodos);
        } else {
          console.error('Failed to fetch todos');
        }
      })
      .catch(error => console.error('Error fetching todos', error));
  }, []);

  const addTodo = (newTodo) => {
      axios.post('http://localhost:8000/api/add', newTodo)
      .then(response => {
        const addedTodo=response.data.todo
        setTodos([...todos,addedTodo])
      })
      .catch(error => console.error('Error in adding todos', error));
  }

  const updateTodo=(id,updatedContent)=>{
    axios.put(`http://localhost:8000/api/update/${id}`,{content:updatedContent})
    .then(response=>{
      if(response.data.success){
        setTodos(todos.map(todo=>(todo._id===id?{...todo,content:updatedContent}:todo)))
      }else{
        console.log("Failed to update");
      }
    })
    .catch(error=>console.error("Error updating todo:",error))
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error('Error in deleting todos', error));
  }

  return (
    <div
      className='min-h-screen bg-gray-800 flex flex-col items-center justify-center'
    >
      <h1 className='text-4xl font-bold mb-6 text-white'
      >Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

    </div>
  )
}

export default App