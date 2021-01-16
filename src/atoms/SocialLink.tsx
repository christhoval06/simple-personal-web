import * as React from 'react'
import styled from 'styled-components'

const SocialLinkStyled = styled.a`
    display: block;
`

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
}

export const SocialLink = ({ children, ...props }: Props) => (
    <SocialLinkStyled
        {...props}
        target="_blank"
        rel="noopener"
        data-testid="social-link"
    >
        {children}
    </SocialLinkStyled>
)

export default SocialLink
