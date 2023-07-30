import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  function addNewTask() {
    if (!modal) return

    const newTodoList = {
      id: Math.random(),
      name: 'Shopping',
    }

    setTodoLists(prev => [...prev, newTodoList])
  }

  const showModal = () => {
    console.log(modal)

    setModal(prev => !prev)
  }

  return (
    <>
      <div className="container">
        <Header />
        <button onClick={showModal} className="add-new-list">
          +
        </button>
        {/* {modal && <Modal addNewTask={addNewTask} />} */}

        {todoLists?.length ? (
          todoLists.map(todoList => (
            <TodoCard key={todoList.id} listName={todoList.name} />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </>
  )
}

export default App
