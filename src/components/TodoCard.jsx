import { React, useState } from 'react'
import Task from './Task'
import '../css/todo-card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const TodoList = props => {
  const [tasks, setTasks] = useState([
    // { id: Math.random(), name: 'I need to do groceries today!' },
  ])

  function toggleMoreOptions() {}

  return (
    <div className="todo-card">
      <h3 className="card-headding">{props.listName}</h3>
      <span className="card-task-counter">"N" Tasks</span>
      <FontAwesomeIcon
        className="card-plus"
        icon={faSquarePlus}
        style={{ color: '#ffffff' }}
      />

      <div className="card-options">
        <FontAwesomeIcon
          onClick={toggleMoreOptions}
          className="card-dots"
          icon={faEllipsis}
          style={{ color: '#ffffff' }}
          size="xl"
        />
        <div className="card-manage-toggle">
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
      </div>

      {/* TODO: Add task list here */}
      <ul className="todo-tasks">
        {tasks?.length
          ? tasks.map(task => {
              return (
                <li key={task.id}>
                  <Task taskName={task.name} />
                </li>
              )
            })
          : 'No tasks in this list!'}
      </ul>
    </div>
  )
}

export default TodoList
