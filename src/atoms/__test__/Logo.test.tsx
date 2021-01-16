import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

import { Logo, Props } from '../Logo'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI(props: Props) {
    return render(<Logo {...props} />, {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('Logo', () => {
    it('renders the correct text in the document', () => {
        const { getByText } = renderUI({ isVisible: false })

        expect(getByText('@christhoval, software engineer')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
        const { container } = renderUI({ isVisible: false })
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })

    it('does not render anything', async () => {
        const { queryByTestId } = renderUI({ isVisible: true })

        expect(queryByTestId('logo-text')).not.toBeInTheDocument()
    })

    it('does can click on logo', async () => {
        const { getByTestId } = renderUI({ isVisible: false })

        getByTestId('link-to-home').click()
    })
})
