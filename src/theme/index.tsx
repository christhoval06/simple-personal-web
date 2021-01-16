import React from 'react'
import { ThemeProvider as TP } from 'styled-components'

import { useTheme } from '@/hooks/useTheme'
import { GlobalStyles } from '@/config/globalStyles'
import { lightTheme } from './light'
import { darkTheme } from './dark'

export interface Props {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme] = useTheme()
    return (
        <TP theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            {children}
        </TP>
    )
}

export default ThemeProvider
