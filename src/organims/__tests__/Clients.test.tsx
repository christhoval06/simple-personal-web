import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Clients } from '../Clients'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<Clients />)
}

describe('Clients', () => {
    it('renders the correct text in the document', () => {
        const { getByText, queryByTestId } = renderUI()

        expect(getByText('some clients')).toBeInTheDocument()
        expect(queryByTestId('section-paragraph')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI()
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does has some clients names', async () => {
        const { getByText } = renderUI()
        expect(getByText(/RugbyPTY/i)).toBeInTheDocument()
        expect(getByText(/MemesPTY/i)).toBeInTheDocument()
        expect(getByText(/Bluebanking/i)).toBeInTheDocument()
    })

    it('does not render title', async () => {
        const { queryByTestId } = renderUI()
        expect(queryByTestId('section-title')).not.toBeInTheDocument()
    })
})
