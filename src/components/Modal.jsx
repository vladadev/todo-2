import { React, useState } from 'react'
import '../css/modal.css'

const Modal = ({ title, onConfirm, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <span
          className="close-btn"
          onClick={() => {
            // Here we should call - props.onClose
            console.log('Clicked X - closing modal')
          }}
        >
          X
        </span>
        <label htmlFor="list-name">{title} </label>
        {children}

        <button onClick={onConfirm}>Add</button>
      </div>
    </div>
  )
}

export default Modal
