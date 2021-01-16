import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

import { Single, Props } from '../Single'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<Single {...props} />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Single', () => {
    it('renders the correct text in the document', () => {
        const { getByText, getByTestId } = renderUI({
            children: '@christhoval',
        })

        expect(getByText('@christhoval')).toBeInTheDocument()
        expect(getByTestId('single-container')).toBeInTheDocument()
        expect(getByTestId('single-content')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({
            children: '@christhoval',
        })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
})
