import { render, screen } from '@testing-library/react'
import useCurrentGraphQL from '@/hook/useCurrentGraphQL'

const mockPropsAll = {
    query: `query Query {
              query {
              pokemons(first: 1) {
                  id
                  name
                  number
                  classification
                  image
              }
          }
      }`
}
const mockPropsOne = {
    query: `query Query {
              query {
                pokemon(name: "Bulbasaur") {
                  id
                  name
                  number
                  classification
                  image
              }
          }
      }`
}

describe('Check Function', () => {
    const { useFetchData, useFetchFindOne } = useCurrentGraphQL()
    it('should Fetch Function useFetchData', () => {
        const tobeReturn = [{ "classification": "Seed Pokémon", "id": "UG9rZW1vbjowMDE=", "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg", "name": "Bulbasaur", "number": "001" }]
        return useFetchData(mockPropsAll).then((data: any) => {
            expect(data.toString()).toBe(tobeReturn.toString())
        })
    })

    it('should Fetch Function useFetchFindOne', () => {
        const tobeReturn = [{ "classification": "Seed Pokémon", "id": "UG9rZW1vbjowMDE=", "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg", "name": "Bulbasaur", "number": "001" }]
        return useFetchFindOne(mockPropsOne).then((data: any) => {
            expect(data.toString()).toBe(tobeReturn.toString())
        })
    })

})
