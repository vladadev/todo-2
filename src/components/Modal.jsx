import { React } from 'react'
import '../css/modal.css'

const Modal = ({ title, onConfirm, toggle, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <span className="close-btn" onClick={() => toggle()}>
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
