import { useDispatch, useTrackedState, Theme } from '@/store'

export const useTheme = (): [Theme, (theme: Theme) => void] => {
    const dispatch = useDispatch()
    const { theme } = useTrackedState()

    const setTheme = (t: Theme) => dispatch({ type: 'SET_THEME', theme: t })
    return [theme, setTheme]
}
