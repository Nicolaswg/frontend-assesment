import React, { useState } from 'react'
import './form_modal.scss'
import SliderRange from './slider_range/SliderRange'
import FormButtons from './form_buttons/FormButtons'
import axios from 'axios'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/'

const FormModal = ({ state, callback, type, pokeId }) => {
  const [innerOpen, setInnerOpen] = useState(false)
  const [attackRange, setAttackRange] = useState(10)
  const [defenceRange, setDefenceRange] = useState(5);
  const [pokeName, setPokeName] = useState('');
  const [pokeImage, setPokeImage] = useState('');
  const modalType = type
  let pokemonId = pokeId

  const handleAttackRangeChange = ((e) => {
    setAttackRange(e.target.value)
  })


  const handleDefenceRangeChange = ((e) => {
    setDefenceRange(e.target.value)
  })

  const RequestBody = {
    "name": pokeName,
    "image": pokeImage,
    "attack": attackRange,
    "defense": defenceRange,
    "hp": 80,
    "type": "normal",
    "idAuthor": 3
  }

  const closeModal = () => {
    callback(innerOpen)
    setInnerOpen(!innerOpen)
  }

  const POST_API_REQUEST = async () => {
    await axios.post(BASE_URL + "?idAuthor=3", RequestBody)
      .then((response) => {
        window.location.reload(false)
      }).catch((e) => {
        return
      })
  }

  const MODIFY_API_REQUEST = async () => {
    await axios.put(BASE_URL + pokemonId, RequestBody)
      .then((response) => {
        window.location.reload(false)
      }).catch((e) => {
        return
      })
  }

  if (state) {
    return (
      <div className="modal_container" data-testid="modal">
        <div className="modal_title">
          <h5>{modalType === 'new' ? 'Nuevo Pokemon' : 'Modificar Pokemon'}</h5>
        </div>
        <form className='form'>
          <div className="inputs_container">
            <div className='elements'>
              <p>Nombre:</p>
              <div>
                <input
                  type="text"
                  className='input'
                  value={pokeName}
                  onChange={((e) => setPokeName(e.target.value))}
                  minLength={3}
                  maxLength={10}
                  required
                />
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
                <input
                  type="text"
                  className='input'
                  placeholder='URL'
                  value={pokeImage}
                  onChange={((e) => setPokeImage(e.target.value))}
                  minLength={20}
                  required
                />
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
            <FormButtons
              text={'Guardar'}
              type={'submit'}
              styleName={pokeName.length >= 3 && pokeImage.length > 20 ? "active" : "disable"}
              handleClick={modalType === 'new' ? POST_API_REQUEST : MODIFY_API_REQUEST}
            />
            <FormButtons
              text={'Cerrar'}
              type={'close'}
              styleName={'active'}
              handleClick={closeModal}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default FormModal;