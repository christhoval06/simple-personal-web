import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Socials } from '../Socials'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<Socials />)
}

describe('Socials', () => {
    it('renders the correct text in the document', () => {
        const { getByText, queryByTestId, queryAllByTestId } = renderUI()

        expect(getByText('social')).toBeInTheDocument()
        expect(getByText('Email')).toBeInTheDocument()
        expect(queryByTestId('section-paragraph')).toBeInTheDocument()
        expect(queryAllByTestId('social-link').length).toBeGreaterThan(0)
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI()
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does have 4 socials', async () => {
        const { queryAllByTestId } = renderUI()
        expect(queryAllByTestId('social-link')).toHaveLength(4)
    })

    it('does have socials', async () => {
        const { getByText } = renderUI()
        expect(getByText('Email')).toBeInTheDocument()
        expect(getByText('Whatsapp')).toBeInTheDocument()
        expect(getByText('Twitter')).toBeInTheDocument()
        expect(getByText('Github')).toBeInTheDocument()
    })
})
