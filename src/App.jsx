import { useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'

function App() {
  const [todoLists, setTodoLists] = useState([{ id: 1, name: 'Shopping' }])

  function addNewTodoList() {
    const newTodoList = {
      id: Math.random(),
      name: 'Shopping',
    }

    setTodoLists(prev => {
      return prev.push(newTodoList)
    })

    console.log(todoLists.length)
  }

  return (
    <div className="container">
      <Header />
      <button onClick={addNewTodoList} className="add-new-list">
        +
      </button>
      {
        // Render all the cards for each item in our list of todos
        todoLists.length > 0 ? (
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
