import React from 'react'
import { AiFillSave, AiOutlineClose } from 'react-icons/ai'

const FormButtons = ({ text, type, styleName, handleClick }) => {
  return (
    <>
      {type === 'submit' ? (
        <div className={styleName} onClick={handleClick}>
          <AiFillSave />
          <p>{text}</p>
        </div>
      ) : (
        <div className={styleName} onClick={handleClick}>
          <AiOutlineClose />
          <p>{text}</p>
        </div>

      )}
    </>

  )
}

export default FormButtons