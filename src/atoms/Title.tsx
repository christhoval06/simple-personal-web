import * as React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h2`
    font-size: calc(10px + 1vw);
    line-height: 1;
    font-weight: 400;
    margin-top: 10vw;
    text-transform: uppercase;
`
export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string
}

export const Title = ({ text }: Props) => <TitleStyled>{text}</TitleStyled>

export default Title
