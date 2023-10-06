import { React, useState } from 'react'
import '../css/modal.css'

const Modal = ({ title, onConfirm, children }) => {
  return (
    <div className="modal">
      <label htmlFor="list-name">{title} </label>

      {children}

      <button onClick={onConfirm}>Add</button>
    </div>
  )
}

export default Modal
