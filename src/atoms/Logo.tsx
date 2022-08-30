import * as React from 'react'
import styled from 'styled-components'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isVisible: boolean
}

const LogoStyled = styled.div<Props>`
    position: fixed;
    z-index: 10;
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 5px 5px;
    top: 60px;
    right: 80px;
    font-size: 20px;
    letter-spacing: 0.03em;
    text-align: right;
    background-color: ${({ theme }) => theme.colors.logo};
    transition-duration: 0.15s;
    border-radius: 5px;
    display: ${(props) => (props.isVisible ? 'none' : 'inline-block')};
`

export const Logo = ({ isVisible }: Props) => (
    <LogoStyled isVisible={isVisible}>
        {!isVisible && (
            <a href="#home" data-testid="link-to-home">
                <strong data-testid="logo-text">
                    @christhoval, Software Engineer
                </strong>
            </a>
        )}
    </LogoStyled>
)

export default Logo
