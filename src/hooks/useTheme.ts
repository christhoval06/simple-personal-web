import { useEffect } from 'react'

import { Theme, useDispatch, useTrackedState } from '@/store'

import { usePrefersColorScheme } from '@/hooks/usePrefersColorScheme'

export const useTheme = (): [Theme, (theme: Theme) => void] => {
    const dispatch = useDispatch()
    const { theme } = useTrackedState()
    const preferredColorScheme = usePrefersColorScheme()

    const setTheme = (t: Theme) => dispatch({ type: 'SET_THEME', theme: t })

    useEffect(() => {
        setTheme(preferredColorScheme)
    }, [preferredColorScheme])

    return [theme, setTheme]
}
