import { useState, useEffect } from 'react'
import '../css/header.css'

const Header = ({ todoLists }) => {
  const completedTasks = todoLists.reduce((acc, list) => {
    return acc + list.tasks.filter(task => task.isCompleted).length
  }, 0)

  return (
    <header>
      <h1>TO DO:</h1>
      <ul className="task-counter">
        <li>Total tasks: 0</li>
        <li>Completed: {completedTasks}</li>
      </ul>
    </header>
  )
}

export default Header
