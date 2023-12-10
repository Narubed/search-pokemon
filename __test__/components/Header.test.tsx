import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
describe('Header', () => {
    it("should render GitHub", () => {
        render(<Header />)
        const myElem = screen.getByText('GitHub')
        expect(myElem).toBeInTheDocument()
    })
    
})
