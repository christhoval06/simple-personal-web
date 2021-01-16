import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { SocialLink, Props } from '../SocialLink'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<SocialLink {...props} />)
}

describe('SocialLink', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI({
            children: 'christhoval',
            href: 'https://christhoval.dev',
        })

        expect(getByText('christhoval')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({
            children: 'christhoval',
            href: 'https://christhoval.dev',
        })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
})
