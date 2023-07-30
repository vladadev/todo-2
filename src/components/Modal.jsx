import { React, useState } from 'react'
import '../css/modal.css'

const Modal = props => {
  const [inputListName, setInputListName] = useState('')

  const handleInputChange = event => {
    // console.log(event.target.value) // TODO: add validation for input field and submit button click to
  }

  return (
    <div className="modal">
      <label htmlFor="list-name">Task list name:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="list-name"
        id="list-name"
      />
      <button onClick={props.addNewTask()}>Add</button>
    </div>
  )
}

export default Modal
