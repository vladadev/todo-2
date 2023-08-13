import { useEffect, useState } from 'react'
import './css/main.css'
import Header from './components/Header'
import TodoCard from './components/TodoCard'
import Modal from './components/Modal'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [modal, setModal] = useState(false)

  function addNewList(listName, setInputListName) {
    // Check if modal is active
    if (!modal) return

    // Check if input data is allright
    if (!listName || typeof listName !== 'string')
      return alert('Please enter a valid list name')

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

  useEffect(() => {
    // console.log(todoLists)
  }, [])

  console.log(todoLists)

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
            <TodoCard key={uuidv4()} listName={todoList.name} />
          ))
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </>
  )
}

export default App
