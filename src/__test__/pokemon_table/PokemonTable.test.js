import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import PokemonTable from '../../components/pokemon_table/PokemonTable';

jest.mock("axios");

const dummyData = [
  {
    "id": 373,
    "name": "Pikachu",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "attack": 50,
    "defense": 51,
    "hp": 156,
    "type": "Normal",
    "id_author": 3
  },
  {
    "id": 398,
    "name": "Raichu",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    "attack": 70,
    "defense": 71,
    "hp": 156,
    "type": "Normal",
    "id_author": 3
  }
]
describe('PokemonTable component mount', () => {
  it('must render table tag', () => {
    render(<PokemonTable list={dummyData} search={'hola'} />)
    expect(screen.getByTestId('pokemon_table')).toBeInTheDocument();
  })
})