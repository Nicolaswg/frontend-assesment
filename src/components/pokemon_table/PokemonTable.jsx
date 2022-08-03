import React from 'react'
import './pokemon_table.scss'
import { RiEditLine, RiDeleteBin2Fill } from 'react-icons/ri'

const PokemonTable = ({ list, search }) => {
  const filteredList = list.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));
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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>img</td>
              <td>{item.attack}</td>
              <td>{item.defense}</td>
              <td>
                <RiEditLine />
                <RiDeleteBin2Fill />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PokemonTable;