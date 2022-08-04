import React from 'react';
import { render, screen } from '@testing-library/react'

import AddButton from '../../../components/header/add_button/AddButton';

describe('AddButton component mount', () => {
  it('must render an input button', () => {
    render(<AddButton />)

    expect(screen.getByTestId('add_button')).toBeInTheDocument()
  })
})