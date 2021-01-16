import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Section, Props } from '../Section'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<Section {...props} />)
}

describe('Section', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI({
            title: 'Portfolio',
            children: "I'm Grot",
        })

        expect(getByText('Portfolio')).toBeInTheDocument()
        expect(getByText("I'm Grot")).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({
            title: 'Portfolio',
            children: "I'm Grot",
        })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does render all', async () => {
        const { queryByTestId, getByText } = renderUI({
            title: 'Portfolio',
            children: "I'm Grot",
        })
        expect(getByText('Portfolio')).toBeInTheDocument()
        expect(queryByTestId('section-paragraph')).toBeInTheDocument()
    })

    it('does not render title', async () => {
        const { queryByTestId } = renderUI({ children: "I'm Grot" })
        expect(queryByTestId('section-title')).not.toBeInTheDocument()
    })
})
