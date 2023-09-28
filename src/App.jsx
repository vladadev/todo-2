import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'

import useValidation from './utils/hooks/useValidation'
import { validateListName } from './utils/validationUtils'

import { v4 as uuidv4, validate } from 'uuid'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  const [currentAction, setCurrentAction] = useState(null) // New state to track the current action
  const [currentListId, setCurrentListId] = useState(null) // State to keep track of the current list ID

  // Use of validation custom hook
  const [userInput, setUserInput, inputError] = useValidation(
    '',
    validateListName
  )

  function addNewList() {
    // Check if modal is active
    if (!modal) return

    // Validate user input
    if (inputError) return alert(inputError)

    const newTodoList = {
      id: uuidv4(),
      name: userInput,
      tasks: [],
    }

    console.log("we're here")
    setCurrentAction('addList')
    setTodoLists(prev => [...prev, newTodoList])
    setUserInput('')
    setModal(prev => !prev)

    // Reset the current action
    // setCurrentAction(null)
  }

  // Function to add a new task
  const addNewTask = (listId, newTask) => {
    // CONTINUE HERE, next object is buggy
    // const newTask = {
    //   id: uuidv4(),
    //   // name: taskName,
    // }

    setTodoLists(prev =>
      prev.map(list =>
        list.id === listId ? { ...list, tasks: [...list.tasks, newTask] } : list
      )
    )

    setModal(false)
    // Reset the current action
    setCurrentAction(null)
  }

  const handleModalConfirm = () => {
    console.log(currentAction)
    if (currentAction === 'addList') {
      addNewList()
    } else if (currentAction === 'addTask') {
      addNewTask(currentListId, userInput)
    }
  }

  const handleInputChange = event => {
    setUserInput(event.target.value)
  }

  // Modal Fn-s
  const showAddListModal = () => {
    setCurrentAction('addList') // Set the current action to 'addList'
    showModal() // Show the modal
  }

  const showModal = () => {
    setModal(prev => !prev)
  }

  return (
    <>
      <div className="container">
        <Header />
        <button onClick={showAddListModal} className="add-new-list">
          {modal ? '-' : '+'}
        </button>

        {modal && (
          <Modal title="Add list name:" onConfirm={handleModalConfirm}>
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
              key={todoList.id}
              listName={todoList.name}
              listId={todoList.id}
              tasks={todoList.tasks}
              // addNewTask={addNewTask}
              showModal={showModal}
              setCurrentListId={setCurrentListId}
              setCurrentAction={setCurrentAction}
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
