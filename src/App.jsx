import React from 'react'
import Header from './components/header/Header'
import "./app.scss"
import PokemonTable from './components/pokemon_table/PokemonTable'

const App = () => {
  return (
    <div className="components_wrapper">
      <Header />
      <PokemonTable />
    </div>
  )
}

export default App;