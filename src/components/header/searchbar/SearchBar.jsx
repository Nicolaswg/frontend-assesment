import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './search_bar.scss'

const SearchBar = ({ callback }) => {
  const [innerSearch, setInnerSearch] = useState('');
  return (
    <div className="search_wrapper">
      <div className="search_bar" data-testid="searchbar">
        <FiSearch className="search_icon" />
        <input type="text" placeholder="buscar" value={innerSearch} onChange={(e) => {
          setInnerSearch(e.target.value)
          callback(innerSearch)
        }} />
      </div>
    </div>
  )
}

export default SearchBar