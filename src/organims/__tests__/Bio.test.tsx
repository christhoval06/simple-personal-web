import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

import { Bio } from '../Bio'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<Bio />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Section', () => {
    it('renders the correct text in the document', () => {
        const { getByText, queryByTestId } = renderUI()

        expect(getByText('Atomic Architecture')).toBeInTheDocument()
        expect(queryByTestId('section-paragraph')).toBeInTheDocument()
        expect(queryByTestId('link-to-home')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI()
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does not render title', async () => {
        const { queryByTestId } = renderUI()
        expect(queryByTestId('section-title')).not.toBeInTheDocument()
    })
})
