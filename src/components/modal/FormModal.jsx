import React, { useState } from 'react'
import './form_modal.scss'
import SliderRange from './slider_range/SliderRange'

const FormModal = () => {
  const [attackRange, setAttackRange] = useState(10)
  const [defenceRange, setDefenceRange] = useState(5);
  const [pokeName, setPokeName] = useState('');
  const [pokeImage, setPokeImage] = useState('');


  const handleAttackRangeChange = ((e) => {
    setAttackRange(e.target.value)
  })

  const handleDefenceRangeChange = ((e) => {
    setDefenceRange(e.target.value)
  })

  return (
    <div className="modal_container" data-testid="modal">
      <div className="modal_title">
        <h5>Nuevo Pokemon</h5>
      </div>
      <form className='form'>
        <div className="inputs_container">
          <div className='elements'>
            <p>Nombre:</p>
            <div>
              <input type="text" className='input' value={pokeName} onChange={((e) => setPokeName(e.target.value))} />
            </div>
          </div>
          <div className='elements'>
            <p>Ataque:</p>
            <div className='range'>
              <SliderRange
                value={attackRange}
                handleRangeChange={handleAttackRangeChange}
                min={0}
                max={100}
                steps={5}
              />
            </div>
          </div>
        </div>
        <div className="inputs_container">
          <div className='elements'>
            <p>Image:</p>
            <div>
              <input type="text" className='input' placeholder='URL' value={pokeImage} onChange={((e) => setPokeImage(e.target.value))} />
            </div>
          </div>
          <div className='elements'>
            <p>Ataque:</p>
            <div className='range'>
              <SliderRange
                value={defenceRange}
                handleRangeChange={handleDefenceRangeChange}
                min={0}
                max={100}
                steps={5}
              />
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