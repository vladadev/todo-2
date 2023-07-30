import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  function addNewList(listName, setInputListName) {
    if (!modal) return

    const newTodoList = {
      id: Math.random(),
      name: listName,
    }

    setTodoLists(prev => [...prev, newTodoList])
    setInputListName('')
    setModal(prev => !prev)
  }

  const showModal = () => setModal(prev => !prev)

  return (
    <>
      <div className="container">
        <Header />
        <button onClick={showModal} className="add-new-list">
          +
        </button>
        {modal && <Modal addNewList={addNewList} />}

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
