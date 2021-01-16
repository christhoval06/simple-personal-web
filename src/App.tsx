import * as React from 'react'

import { Main } from '@/screens/Main'
import { Provider } from '@/store'
import { ThemeProvider } from '@/theme'

export const App = () => (
    <Provider>
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    </Provider>
)

export default App
