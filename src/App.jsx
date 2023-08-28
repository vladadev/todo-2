import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

import { validateListName } from './utils/validationUtils'

import { v4 as uuidv4, validate } from 'uuid'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  const [userInput, setUserInput] = useState('') // Moved this state to App.jsx

  const handleInputChange = event => {
    setUserInput(event.target.value)
  }

  console.log(validateListName('This is some list name!'))

  function addNewList() {
    // Check if modal is active
    if (!modal) return

    // Validate user input
    const userValidationObj = validateListName(userInput)
    if (!userValidationObj.isValid) return alert(userValidationObj.error)

    //TODO: Find solution for getting 'tasks' data
    const newTodoList = {
      id: uuidv4(),
      name: userInput,
      tasks: [],
    }

    setTodoLists(prev => [...prev, newTodoList])
    setUserInput('')
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
              value={userInput}
            />
          </Modal>
        )}

        {todoLists?.length ? (
          todoLists.map(todoList => (
            <TodoCard
              key={uuidv4()}
              listName={todoList.name}
              listId={todoList.id}
              // addTasks={addTasks}
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
