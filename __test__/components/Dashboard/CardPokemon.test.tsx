import { render, screen } from '@testing-library/react'

import CardPokemon from '@/components/Dashboard/CardPokemon'


const mockSetTodos = jest.fn()

const pokemonMock = {
    "id": "UG9rZW1vbjowMDE=",
    "name": "Bulbasaur",
    "classification": "Seed Pokémon",
    "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
}
describe('Check Card Pokemon', () => {

    it('should render an name pokemon', () => {
        render(<CardPokemon pokemon={pokemonMock} useFetchFindOne={mockSetTodos}  />) 
        const dialog = screen.getByText('Bulbasaur')
        expect(dialog).toBeInTheDocument()// ASSERT
    })
    it('should render an name classification', () => {
        render(<CardPokemon pokemon={pokemonMock} useFetchFindOne={mockSetTodos}  />) 
        const dialog = screen.getByText('Seed Pokémon')
        expect(dialog).toBeInTheDocument()// ASSERT
    })

})

