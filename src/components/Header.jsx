import { useState, useEffect } from 'react'
import '../css/header.css'

const Header = ({ todoLists }) => {
  console.log(todoLists)

  const [numOfTasks, setNumOfTasks] = useState(0)

  useEffect(() => {}, [])

  return (
    <header>
      <h1>TO DO:</h1>
      <ul className="task-counter">
        <li>Total tasks: 12</li>
        <li>Completed: 2</li>
      </ul>
    </header>
  )
}

export default Header
