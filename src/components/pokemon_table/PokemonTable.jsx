import React, { useState } from 'react'
import './pokemon_table.scss'
import { RiEditLine, RiDeleteBin2Fill } from 'react-icons/ri'
import axios from 'axios'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/'

const PokemonTable = ({ list, search, callback }) => {
  const [innerOpen, setInnerOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [rowId, setRowId] = useState()
  const filteredList = list.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  const handleEditOnClick = (e) => {
    const idRef = e.target.parentNode.parentNode.getAttribute('id');
    callback(innerOpen, modalType, rowId)
    setInnerOpen(!innerOpen)
    setModalType('edit')
    setRowId(idRef)
  }

  const handleDeleteOnClick = async (e) => {
    const id = e.target.parentNode.parentNode.getAttribute('id');
    await axios.delete(BASE_URL + id)
      .then((response) => {
        window.location.reload(false)
      }).catch((e) => {
        return;
      })
  }

  return (
    <table className="pokemon_table" data-testid="pokemon_table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((item) => {
          return (
            <tr key={item.id} id={item.id}>
              <td>{item.name}</td>
              <td><img src={item.image} alt="img" /></td>
              <td>{item.attack}</td>
              <td>{item.defense}</td>
              <td>
                <RiEditLine onClick={handleEditOnClick} id={item.id} />
                <RiDeleteBin2Fill onClick={handleDeleteOnClick} id={item.id} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PokemonTable;