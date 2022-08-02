import React from "react"
import { render, screen } from '@testing-library/react'

import { Header } from "../../components/header/Header"

describe('Header component mount', () => {
  it('must render the title', () => {
    render(<Header />)
    expect(screen.getByTestId('title')).toBeInTheDocument()
  })
})