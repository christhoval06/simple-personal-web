import { useEffect, useCallback } from 'react'

import { Theme, useDispatch, useTrackedState } from '@/store'

import { usePrefersColorScheme } from '@/hooks/usePrefersColorScheme'

export const useTheme = (): [Theme, (theme: Theme) => void] => {
    const dispatch = useDispatch()
    const { theme } = useTrackedState()
    const preferredColorScheme = usePrefersColorScheme()

    const setTheme = useCallback((t: Theme) => dispatch({ type: 'SET_THEME', theme: t }), [dispatch])

    useEffect(() => {
        setTheme(preferredColorScheme)
    }, [preferredColorScheme, setTheme])

    return [theme, setTheme]
}
