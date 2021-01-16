import { renderHook, act } from '@testing-library/react-hooks'

import { useValue } from '@/store'

function renderUI<T>() {
    return renderHook(() => useValue())
}

describe('useTheme', () => {
    it('should use theme', () => {
        const { result, rerender } = renderUI()
        const [state, dispatch] = result.current
        act(() => {
            dispatch({ type: 'SET_THEME', theme: 'dark' })
        })
        rerender()
        expect(state.theme).toBe('light')
    })
})
