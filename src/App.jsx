import { useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'

function App() {
  const [todoLists, setTodoLists] = useState([])

  function addNewTodoList() {
    const newTodoList = {
      id: Math.random(),
      name: 'Shopping',
    }

    setTodoLists(prev => [...prev, newTodoList])
  }

  return (
    <div className="container">
      <Header />
      <button onClick={addNewTodoList} className="add-new-list">
        +
      </button>
      {
        // Render all the cards for each item in our list of todos
        todoLists?.length ? (
          todoLists.map(todoList => (
            <TodoCard key={todoList.id} listName={todoList.name} />
          ))
        ) : (
          <p>No todos!</p>
        )
      }
    </div>
  )
}

export default App
