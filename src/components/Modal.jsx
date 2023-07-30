import { React, useState } from 'react'
import '../css/modal.css'

const Modal = props => {
  const [inputListName, setInputListName] = useState('')

  const handleInputChange = event => {
    let inputValue = event.target.value

    setInputListName(inputValue)
  }

  return (
    <div className="modal">
      <label htmlFor="list-name">Task list name:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="list-name"
        id="list-name"
        value={inputListName}
      />
      <button onClick={() => props.addNewList(inputListName)}>Add</button>
    </div>
  )
}

export default Modal
