import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'


import './add_button.scss'

const AddButton = ({ callback }) => {
  const [innerOpen, setInnerOpen] = useState(false);

  const handleOnclick = (e) => {
    callback(innerOpen)
    setInnerOpen(!innerOpen)
  }

  return (
    <div className="btn_wrapper" data-testid="add_button" onClick={handleOnclick}>
      <BsPlusLg />
      <p>Nuevo</p>
    </div>
  )
}

export default AddButton