import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

import { Main } from '../Main'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<Main />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Main', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI()

        expect(getByText('some clients')).toBeInTheDocument()
        expect(getByText('recent projects')).toBeInTheDocument()
        expect(getByText('social')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI()
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
})
