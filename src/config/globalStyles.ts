import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
 *, :after, :before {
        box-sizing:border-box
    }

    :root {
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size:4
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust:100%

    }

    body {
        font-family:system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        color: ${({ theme }) => theme.colors.text}
    }

    hr {
        height:0
    }

    abbr[title] {
        -webkit-text-decoration: underline dotted;
        text-decoration:underline dotted
    }

    b, strong {
        font-weight:bolder
    }

    code, kbd, pre, samp {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        font-size:1em
    }

    small {
        font-size:80%
    }

    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align:baseline
    }

    sub {
        bottom:-.25em
    }

    sup {
        top:-.5em
    }

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin:0
    }

    button, select {
        text-transform:none
    }

    [type=button], [type=reset], [type=submit], button {
        -webkit-appearance:button
    }

    [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
        border-style: none;
        padding:0
    }

    [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {
        outline:1px dotted ButtonText
    }

    fieldset {
        padding:.35em .75em .625em
    }

    legend {
        padding:0
    }

    progress {
        vertical-align:baseline
    }

    [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
        height:auto
    }

    [type=search] {
        -webkit-appearance: textfield;
        outline-offset:-2px
    }

    [type=search]::-webkit-search-decoration {
        -webkit-appearance:none
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font:inherit
    }

    summary {
        display:list-item
    }

    body {
        font-family: Work Sans, sans-serif;
        font-weight: 300;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.colors.body}
    }

    a {
        text-decoration: inherit;
        color: inherit;
        line-height:inherit
    }

    b, strong {
        font-weight:400
    }

    h1, h2, h3, h4, h5, h6, p {
        font-weight: inherit;
        margin: 0;
        line-height: inherit
    }
`