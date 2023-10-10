import { React, useState, useRef } from 'react'
import Task from './Task'
import '../css/todo-card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const TodoCard = props => {
  const [isCardOptionsVisible, setIsCardOptionsVisible] = useState(false)
  const [isTasksVisible, setIsTasksVisible] = useState(false)

  const toggleMoreOptions = () => setIsCardOptionsVisible(prev => !prev)

  const toggleTasks = event => {
    if (event.target.tagName === 'path' || event.target.tagName === 'svg')
      return

    setIsTasksVisible(prev => !prev)
  }

  const taskCheckbox = useRef()
  const handleTaskCheckbox = () => {
    // console.log(taskCheckbox.current.checked)
    props.isTaskCompleted(taskCheckbox.current.checked)
  }

  const prepareTask = () => {
    props.toggleModal() // Show the modal
    props.setCurrentListId(props.listId) // Set the current list ID
    props.setCurrentAction('addTask') // Set the current action to 'addTask'
  }

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
          {props.tasks?.length
            ? props.tasks.map(task => {
                return (
                  <li key={task.id}>
                    <div className="todo-task">
                      {/* Checkbox that we need to listen to! */}
                      <input
                        ref={taskCheckbox}
                        onChange={handleTaskCheckbox}
                        id={task.id}
                        type="checkbox"
                        name="r"
                        value="2"
                      />
                      <label htmlFor={task.id}>
                        <Task taskName={task.name} />
                      </label>
                    </div>

                    <div className="todo-task-delete">
                      <FontAwesomeIcon
                        className="task-delete"
                        icon={faTrashCan}
                        style={{ color: '#ffffff' }}
                      />
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
