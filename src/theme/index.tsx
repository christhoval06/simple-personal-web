import React from 'react'
import { ThemeProvider as TP } from 'styled-components'

import { GlobalStyles } from '@/config/globalStyles'

import { useTheme } from '@/hooks/useTheme'

import { darkTheme } from './dark'
import { lightTheme } from './light'

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
