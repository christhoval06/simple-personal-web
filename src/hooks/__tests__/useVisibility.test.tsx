import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render, RenderResult } from '@testing-library/react'

import { useVisibility } from '../useVisibility'

function renderUI() {
    return renderHook<undefined, [boolean, React.RefObject<Element>, RenderResult]>(() => {
        const [visible, ref] = useVisibility<HTMLDivElement>()
        const cmp = render(<div ref={ref} style={{ height: 1000 }} />)
        return [visible, ref, cmp]
    })
}

describe('useVisibility', () => {
    it('should use visibility', () => {
        const { result, rerender } = renderUI()
        const [isVisible] = result.current
        rerender()
        expect(isVisible).toBeFalsy()
    })
})
