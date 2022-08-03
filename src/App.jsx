import React, { useEffect, useState } from 'react'
import "./app.scss"
import PokemonTable from './components/pokemon_table/PokemonTable'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'
import AddButton from './components/header/add_button/AddButton'
import FormModal from './components/modal/FormModal'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/?idAuthor=3'



const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const pokemonList = await axios.get(BASE_URL)
      setPokemonList(pokemonList.data)
    })()
  }, [])

  const onSearchChange = ((e) => {
    setSearchValue(e.target.value)
  })
  return (
    <div className="components_wrapper">
      <div className="header_wrapper">
        <h5 className="title" data-testid="title">Lista de pokemon</h5>
        <div className="hr_container">
          <div className="search_wrapper">
            <div className="search_bar">
              <FiSearch className="search_icon" />
              <input type="text"
                placeholder="buscar"
                value={searchValue}
                onChange={onSearchChange}
                onBlur={onSearchChange}
                data-testid="searchbar" />
            </div>
          </div>
          <AddButton callback={(innerOpen) => setIsOpen(innerOpen)} />
        </div>
      </div>
      <PokemonTable list={pokemonList} search={searchValue} />
      {!isOpen ? <FormModal /> : null}
    </div>
  )
}



export default App;