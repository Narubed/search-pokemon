import { render, screen } from '@testing-library/react'
import Dashborad from '@/app/page'
describe('Dashborad', () => {
    it("should render Learn GitHub", () => {
        render(<Dashborad />)
        const myElem = screen.getByText('GitHub')
        expect(myElem).toBeInTheDocument()
    })
 
})
