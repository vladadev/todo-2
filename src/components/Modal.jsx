import { React, useState } from 'react'
import '../css/modal.css'

const Modal = ({ addNewList, modalInfo }) => {
  const [inputListName, setInputListName] = useState('')

  const handleInputChange = event => {
    let inputValue = event.target.value

    setInputListName(inputValue)

    console.log(addNewList)
    console.log(modalInfo)
  }

  return (
    <div className="modal">
      <label htmlFor="list-name">Add {modalInfo.name} name:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="list-name"
        id="list-name"
        value={inputListName}
      />
      <button onClick={() => addNewList(inputListName, setInputListName)}>
        Add
      </button>
    </div>
  )
}

export default Modal
