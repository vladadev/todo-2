import React from 'react'
import '../css/modal.css'

const Modal = () => {
  return (
    <div className="modal">
      <label htmlFor="list-name">Task list name:</label>
      <input type="text" name="list-name" id="list-name" />
      <button>Add</button>
    </div>
  )
}

export default Modal
