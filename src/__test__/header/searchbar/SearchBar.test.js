import React from "react"
import { render, screen } from '@testing-library/react'

import { SearchBar } from "../../../components/header/searchbar/SearchBar"

describe('SearchBar component mount', () => {
  it('must render the input', () => {
    render(<SearchBar />)

    expect(screen.getByTestId('searchbar')).toBeInTheDocument();
  })
})