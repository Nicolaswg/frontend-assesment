import React from 'react'
import SearchBar from './searchbar/SearchBar'
import AddButton from './add_button/AddButton'

import './header.scss'

export const Header = () => {
  return (
    <div className="header_wrapper">
      <h5 className="title" data-testid="title">Lista de pokemon</h5>
      <div className="hr_container">
        <SearchBar />
        <AddButton />
      </div>
    </div>
  )
}
