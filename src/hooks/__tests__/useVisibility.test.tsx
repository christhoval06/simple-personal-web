import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render } from '@testing-library/react'

import { useVisibility } from '../useVisibility'

// type ComponentProps = React.ComponentProps<typeof Logo>;

function renderUI() {
    return renderHook<undefined, [boolean, React.RefObject<Element>]>(() => {
        const [visible, ref] = useVisibility<HTMLDivElement>()
        render(<div ref={ref} style={{ height: 200 }} />)
        return [visible, ref]
    })
}

describe('useVisibility', () => {
    it('should use visibility', () => {
        const { result, rerender } = renderUI()
        const [isVisible, ref] = result.current
        rerender()
        expect(isVisible).toBeFalsy()
        expect(ref.current).toBeInTheDocument()
    })
})
