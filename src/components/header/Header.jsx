import React from 'react'
import { SearchBar } from './searchbar/SearchBar'

export const Header = () => {
  return (
    <div className="header_wrapper">
      <h5 className="title">Lista de pokemon</h5>
      <div className="hr_container">
        <SearchBar />
      </div>
    </div>
  )
}
