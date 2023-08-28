import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  const [inputListName, setInputListName] = useState('') // Moved this state to App.jsx

  const handleInputChange = event => {
    setInputListName(event.target.value)
  }

  function addNewList() {
    // Check if modal is active
    if (!modal) return

    //TODO: Find solution for getting 'tasks' data
    const newTodoList = {
      id: uuidv4(),
      name: listName,
      tasks: [],
    }

    setTodoLists(prev => [...prev, newTodoList])
    setInputListName('')
    setModal(prev => !prev)
  }

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

        {modal && (
          <Modal title="Add list name:" onConfirm={addNewList}>
            <input
              onChange={handleInputChange}
              type="text"
              name="list-name"
              id="list-name"
              value={inputListName}
            />
          </Modal>
        )}

        {todoLists?.length ? (
          todoLists.map(todoList => (
            <TodoCard
              key={uuidv4()}
              listName={todoList.name}
              listId={todoList.id}
              addTasks={addTasks}
            />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </>
  )
}

export default App
