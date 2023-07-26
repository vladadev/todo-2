import { useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

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
    <>
      <div className="container">
        <Header />
        <button onClick={addNewTodoList} className="add-new-list">
          +
        </button>
        {todoLists?.length ? (
          todoLists.map(todoList => (
            <TodoCard key={todoList.id} listName={todoList.name} />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
      <Modal />
    </>
  )
}

export default App
