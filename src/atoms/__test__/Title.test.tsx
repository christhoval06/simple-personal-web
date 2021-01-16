import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Title, Props } from '../Title'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<Title {...props} />)
}

describe('Title', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI({ text: 'christhoval' })

        expect(getByText('christhoval')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({ text: 'christhoval' })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
})
