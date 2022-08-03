import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonTable from '../../components/pokemon_table/PokemonTable';

describe('PokemonTable component mount', () => {
  it('must render table tag', () => {
    render(<PokemonTable />)

    expect(screen.getByTestId('pokemon_table')).toBeInTheDocument();
  })
})