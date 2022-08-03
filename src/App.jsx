import React, { useEffect, useState } from 'react'
import "./app.scss"
import PokemonTable from './components/pokemon_table/PokemonTable'
import axios from 'axios'
import SearchBar from './components/header/searchbar/SearchBar'
import AddButton from './components/header/add_button/AddButton'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/?idAuthor=3'



const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const pokemonList = await axios.get(BASE_URL)
      setPokemonList(pokemonList.data)
    })()
  }, [])


  return (
    <div className="components_wrapper">
      <div className="header_wrapper">
        <h5 className="title">Lista de pokemon</h5>
        <div className="hr_container">
          <SearchBar callback={(searchValue) => setSearchValue(searchValue)} />
          <AddButton />
        </div>
      </div>
      <PokemonTable list={pokemonList} search={searchValue} />
    </div>
  )
}



export default App;