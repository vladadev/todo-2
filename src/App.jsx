import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)
  const ID = Math.random()

  function addNewList(listName, setInputListName) {
    // Check if modal is active
    if (!modal) return

    // Check if input data is allright
    if (!listName || typeof listName !== 'string')
      return alert('Please enter a valid list name')

    const newTodoList = {
      id: ID,
      name: listName,
      tasks: {
        taskId: ID,
        description: 'Task description',
        isDone: false,
      },
    }

    setTodoLists(prev => [...prev, newTodoList])
    setInputListName('')
    setModal(prev => !prev)
  }

  useEffect(() => {
    console.log(todoLists)
  }, [todoLists])

  const showModal = () => {
    setModal(prev => !prev)
  }

  return (
    <>
      <div className="container">
        <Header />
        <button onClick={showModal} className="add-new-list">
          {modal ? '-' : '+'}
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
