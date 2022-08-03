import React from 'react'
import './form_modal.scss'

const FormModal = () => {
    return (
        <div className="modal_container" data-testid="modal">
            <div className="modal_title">
                <h5>Nuevo Pokemon</h5>
            </div>
            <form className='form'>
                <div className="inputs_container">
                    <div className='elements'>
                        <p>Nombre:</p>
                        <div className="text">
                            <input type="text" />
                        </div>
                    </div>
                    <div className='elements'>
                        <p>Imagen:</p>
                        <div className="text">
                            <input placeholder='url' type="text" />
                        </div>
                    </div>
                </div>
                <div className="inputs_container">
                    <div className='elements'>
                        <p>Nombre:</p>
                        <div className="text">
                            <input type="text" />
                        </div>
                    </div>
                    <div className='elements'>
                        <p>Imagen:</p>
                        <div className="text">
                            <input placeholder='url' type="text" />
                        </div>
                    </div>
                </div>
                <div className="form_buttons">
                </div>
            </form>
        </div>
    )
}

export default FormModal;