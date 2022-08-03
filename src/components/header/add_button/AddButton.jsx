import React from 'react'
import { BsPlusLg } from 'react-icons/bs'

import './add_button.scss'

const AddButton = () => {
    return (
        <div className="btn_wrapper" data-testid="add_button">
            <BsPlusLg className="plus_icon" />
            <p>Nuevo</p>
        </div>
    )
}

export default AddButton