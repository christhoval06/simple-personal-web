import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    outline: none;
`

const Content = styled.main`
    padding: 10vw 3vw;
    font-size: 4.9vw;
    line-height: 1.3;
`

export interface Props {
    children: React.ReactNode
}

export const Single = ({ children }: Props) => {
    return (
        <Container data-testid="single-container">
            <Content data-testid="single-content">{children}</Content>
        </Container>
    )
}

export default Single
