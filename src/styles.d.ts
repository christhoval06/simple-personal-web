import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    toggleBorder: string,
    background: string,
    colors: {
        body: string,
        text: string,
        logo: string,
      },
  }
}