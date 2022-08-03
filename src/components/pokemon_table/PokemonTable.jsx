import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './pokemon_table.scss'

import { RiEditLine, RiDeleteBin2Fill } from 'react-icons/ri'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/?idAuthor=3'

const PokemonTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonList = await axios.get(BASE_URL)
      setData(pokemonList.data);
    })()
  }, [])

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
        {data.map((item) => {
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