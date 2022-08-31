import Link from '@src/atoms/Link'
import React from 'react'
import styled from 'styled-components'

const ProjectStyled = styled.span`
    position: relative;
`

const ProjectInfoStyled = styled.span`
    display: none;
    position: absolute;
    z-index: 10;
    bottom: -35px;
    left: 0px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.logo};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1vw;
    padding-top: 10px;
    padding-right: 15px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 5px 5px;
    opacity: 0;
    visibility: hidden;
    transition-duration: 0.15s;
    transition-timing-function: initial;
    transition-delay: initial;
    transition-property: initial;

    @media (min-width: 768px) {
        display: block;
    }

    ${ProjectStyled}:hover & {
        opacity: 1;
        visibility: visible;
    }
`

export interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement> {
    name: string
    url?: string
    info: Array<string>
}

export const Project = ({ name, url, info }: Props) => (
    <ProjectStyled data-testid="project">
        <Link data-testid="project-link" href={url || '#'}>
        {name}
        </Link>
        <ProjectInfoStyled data-testid="project-info">
            {info.join(' • ')}
        </ProjectInfoStyled>
    </ProjectStyled>
)

export default Project
