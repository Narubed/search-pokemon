import { render, screen } from '@testing-library/react'

import CardDetail from '@/components/Dashboard/CardDetail'

const mockTodo = {
    "id": "UG9rZW1vbjowMDE=",
    "name": "Bulbasaur",
    "classification": "Seed Pokémon",
    "types": [
        "Grass",
        "Poison"
    ],
    "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
    ],
    "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
    ],
    "fleeRate": 0.1,
    "maxCP": 951,
    "maxHP": 1071,
    "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    "evolutions": [
        {
            "id": "UG9rZW1vbjowMDI=",
        }],
    "weight": {
        "minimum": "6.04kg",
        "maximum": "7.76kg"
    },
    "height": {
        "minimum": "0.61m",
        "maximum": "0.79m"
    },
    "attacks": {
        "fast": [
            {
                "name": "Tackle",
                "type": "Normal",
                "damage": 12
            },
            {
                "name": "Vine Whip",
                "type": "Grass",
                "damage": 7
            }
        ],
        "special": [
            {
                "name": "Power Whip",
                "type": "Grass",
                "damage": 70
            },
            {
                "name": "Seed Bomb",
                "type": "Grass",
                "damage": 40
            },
            {
                "name": "Sludge Bomb",
                "type": "Poison",
                "damage": 55
            }
        ]
    }
}
const mockSetTodos = jest.fn()

describe('Check Dialog', () => {
    it('should render an dialog', () => {
        render(<CardDetail isDetail={mockTodo} setOpen={mockSetTodos} isOpen={true} />) // ARRANGE
        const dialog = screen.getByRole('dialog')
        expect(dialog).toBeInTheDocument()// ASSERT
    })
    it('should render next evolutions', () => {
        render(<CardDetail isDetail={mockTodo} setOpen={mockSetTodos} isOpen={true} />)
        const dialog = screen.getByText('Next evolutions')
        expect(dialog).toBeInTheDocument()// ASSERT
    })
})

