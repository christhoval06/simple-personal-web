import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

import { Projects } from '../Projects'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<Projects />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Projects', () => {
    it('renders the correct text in the document', () => {
        const { getByText, queryByTestId, queryAllByTestId } = renderUI()

        expect(getByText('recent projects')).toBeInTheDocument()
        expect(queryByTestId('section-paragraph')).toBeInTheDocument()
        expect(queryAllByTestId('project-link').length).toBeGreaterThan(0)
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI()
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does have exactly 4 projects', async () => {
        const { queryAllByTestId } = renderUI()
        expect(queryAllByTestId('project')).toHaveLength(5)
    })

    it('does have some projects names', async () => {
        const { getByText } = renderUI()
        expect(getByText(/CashCard/i)).toBeInTheDocument()
        expect(getByText(/MemesPTY/i)).toBeInTheDocument()
        expect(getByText(/Rugby Field/i)).toBeInTheDocument()
    })
})
