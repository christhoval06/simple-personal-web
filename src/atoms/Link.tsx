import * as React from 'react'
import styled from 'styled-components'

import { rollText } from '@/utils/transformText'

const LinkStyled = styled.a`
    display: block;
`
export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: string
}

export const Link = ({ children, ...props }: Props) => {
    const cycle = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const elm = event.currentTarget.querySelector<HTMLElement>(
            '[data-text]',
        )
        if (elm) {
            rollText(elm)
        }
    }

    return (
        <LinkStyled
            {...props}
            target="_blank"
            rel="noopener"
            data-testid="social-link"
            onMouseOver={cycle}
        >
            <span data-text={children}>{children}</span>
        </LinkStyled>
    )
}

export default Link
