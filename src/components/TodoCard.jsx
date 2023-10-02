import { React, useEffect, useState } from 'react'
import Task from './Task'
import '../css/todo-card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const TodoCard = props => {
  const [tasks, setTasks] = useState([
    { id: Math.random(), name: 'I need to do groceries today!' },
  ])
  const [isCardOptionsVisible, setIsCardOptionsVisible] = useState(false)
  const [isTasksVisible, setIsTasksVisible] = useState(false)
  const [currentListId, setCurrentListId] = useState(null)

  const toggleMoreOptions = () => setIsCardOptionsVisible(prev => !prev)

  const toggleTasks = event => {
    if (event.target.tagName === 'path' || event.target.tagName === 'svg')
      return

    setIsTasksVisible(prev => !prev)
    setCurrentListId(props.listId)
  }

  const prepareTask = () => {
    props.toggleModal() // Show the modal
    props.setCurrentListId(props.listId) // Set the current list ID
    props.setCurrentAction('addTask') // Set the current action to 'addTask'
  }

  useEffect(() => {
    setCurrentListId(props.listId)
  }, [props.listId])

  return (
    <div className="todo-card">
      <div className="todo-list" onClick={toggleTasks}>
        <h3 className="card-headding">{props.listName}</h3>
        <span className="card-task-counter">"N" Tasks</span>
        <FontAwesomeIcon
          className="card-plus"
          icon={faSquarePlus}
          style={{ color: '#ffffff' }}
          onClick={prepareTask}
        />

        <div className="card-options">
          <FontAwesomeIcon
            onClick={toggleMoreOptions}
            className="card-dots"
            icon={faEllipsis}
            style={{ color: '#ffffff' }}
            size="xl"
          />
          {isCardOptionsVisible && (
            <div className="card-options-toggle">
              <FontAwesomeIcon
                className="card-edit"
                icon={faPencil}
                style={{ color: '#ffffff' }}
              />
              <FontAwesomeIcon
                className="card-delete"
                icon={faTrashCan}
                style={{ color: '#ffffff' }}
              />
            </div>
          )}
        </div>
      </div>

      {isTasksVisible && (
        <ul className="todo-tasks">
          {tasks?.length
            ? tasks.map(task => {
                return (
                  <li key={task.id}>
                    <div className="todo-task">
                      <input id={task.id} type="checkbox" name="r" value="2" />
                      <label htmlFor={task.id}>
                        <Task taskName={task.name} />
                      </label>
                    </div>
                  </li>
                )
              })
            : 'No tasks in this list!'}
        </ul>
      )}
    </div>
  )
}

export default TodoCard
