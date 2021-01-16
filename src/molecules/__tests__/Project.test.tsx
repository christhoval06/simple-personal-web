import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'
import { Project, Props } from '../Project'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<Project {...props} />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Project', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI({
            name: 'Portfolio',
            url: 'https://christhoval.dev',
            info: ['react', 'ts', 'python'],
        })

        expect(getByText('Portfolio')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({
            name: 'Portfolio',
            url: 'https://christhoval.dev',
            info: ['react', 'ts', 'python'],
        })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does not render anything', async () => {
        const { queryByTestId } = renderUI({
            name: 'Portfolio',
            url: 'https://christhoval.dev',
            info: ['react', 'ts', 'python'],
        })

        expect(queryByTestId('project')).toBeInTheDocument()
        expect(queryByTestId('project-link')).toBeInTheDocument()
        expect(queryByTestId('project-info')).toBeInTheDocument()
    })
})
