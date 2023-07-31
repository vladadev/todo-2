import { React, useState } from 'react'
import Task from './Task'
import '../css/todo-card.css'

const TodoList = props => {
  const [tasks, setTasks] = useState([
    { id: Math.random(), name: 'I need to do groceries today!' },
  ])

  return (
    <div className="todo-card">
      <h3>{props.listName}</h3>
      <span>"N" Tasks</span>
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
