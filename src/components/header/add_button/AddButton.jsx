import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'


import './add_button.scss'

const AddButton = ({ callback }) => {
  const [innerOpen, setInnerOpen] = useState(false);
  const [modalType, setModalType] = useState('')
  const handleOnclick = () => {
    callback(innerOpen, modalType)
    setInnerOpen(!innerOpen)
    setModalType('new')
  }

  return (
    <div className="btn_wrapper" data-testid="add_button" onClick={handleOnclick}>
      <BsPlusLg />
      <p>Nuevo</p>
    </div>
  )
}

export default AddButton