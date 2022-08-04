import React, { useEffect, useState } from 'react'
import "./app.scss"
import PokemonTable from './components/pokemon_table/PokemonTable'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'
import AddButton from './components/header/add_button/AddButton'
import FormModal from './components/modal/FormModal'

const BASE_URL = 'https://bp-pokemons.herokuapp.com/'



const App = () => {
  const pokeStore = JSON.parse(localStorage.getItem('pokeList'))
  const [pokemonList, setPokemonList] = useState(pokeStore ? pokeStore : [])
  const [searchValue, setSearchValue] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [pokemonId, setPokemonId] = useState(0);

  useEffect(() => {
    (async () => {
      const pokemonList = await axios.get(BASE_URL + "?idAuthor=3")
      setPokemonList(pokemonList.data)
    })()
  }, [])

  const onSearchChange = ((e) => {
    setSearchValue(e.target.value)
  })

  localStorage.setItem('pokeList', JSON.stringify(pokemonList))
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
          <AddButton callback={(innerOpen, modalType) => {
            setIsOpen(innerOpen)
            setModalType(modalType)
          }} />
        </div>
      </div>
      <PokemonTable
        list={JSON.parse(localStorage.getItem('pokeList'))}
        search={searchValue}
        callback={(innerOpen, modalType, rowId) => {
          setIsOpen(innerOpen)
          setModalType(modalType)
          setPokemonId(rowId)
        }} />
      <FormModal state={isOpen} callback={(innerOpen) => setIsOpen(innerOpen)} type={modalType} pokeId={pokemonId} />
    </div>
  )
}



export default App;