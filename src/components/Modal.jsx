import { React, useState } from 'react'
import '../css/modal.css'

const Modal = ({ title, onConfirm, children }) => {
  // const [inputListName, setInputListName] = useState('')

  // const handleInputChange = event => {
  //   let inputValue = event.target.value

  //   setInputListName(inputValue)

  //   console.log(addNewList)
  //   console.log(modalInfo)
  // }

  // console.log(onConfirm)

  return (
    <div className="modal">
      <label htmlFor="list-name">{title} </label>

      {children}

      <button onClick={onConfirm}>Add</button>
    </div>
  )
}

export default Modal
