import React from 'react'
import '../css/header.css'

const Header = props => {
  return (
    <header>
      <h1>TO DOoo:</h1>
      <ul className="task-counter">
        <li>Total tasks: 12</li>
        <li>Completed: 2</li>
      </ul>
    </header>
  )
}

export default Header
