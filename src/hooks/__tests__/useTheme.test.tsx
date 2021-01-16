import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import { Provider, Theme } from '@/store'
import { ThemeProvider } from '@/theme'

import { useTheme } from '../useTheme'

// type ComponentProps = React.ComponentProps<typeof Logo>;

type Hook = [Theme, (theme: Theme) => void]

function renderUI() {
    return renderHook<undefined, Hook>(() => useTheme(), {
        wrapper: ({ children }) => (
            <Provider>
                <ThemeProvider>{children}</ThemeProvider>
            </Provider>
        ),
    })
}

describe('useTheme', () => {
    it('should use visibility', () => {
        const { result, rerender } = renderUI()
        const [theme, setTheme] = result.current
        act(() => {
            setTheme('dark')
        })
        rerender()
        expect(theme).toBe('light')
    })
})
