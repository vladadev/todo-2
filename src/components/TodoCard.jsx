import React from 'react'
import '../css/todo-card.css'

const TodoList = props => {
  return (
    <div className="todo-card">
      <h3>{props.listName}</h3>
      <span>"N" Tasks</span>
    </div>
  )
}

export default TodoList
