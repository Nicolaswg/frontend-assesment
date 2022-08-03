import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './search_bar.scss'

const SearchBar = () => {
  return (
    <div className="search_wrapper">
      <div className="search_bar" data-testid="searchbar">
        <FiSearch className="search_icon" />
        <input type="text" placeholder="buscar" />
      </div>
    </div>
  )
}

export default SearchBar