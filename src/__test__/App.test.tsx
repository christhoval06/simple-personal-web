import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
// import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

import { App } from '../App'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return render(<App />)
}

describe('Project', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

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
