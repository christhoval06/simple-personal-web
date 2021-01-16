import React from 'react'

import { Title } from '@/atoms/Title'

export interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title?: string
    children: React.ReactNode
}
export const Section = ({ title, children, ...props }: Props) => (
    <div {...props}>
        {title && <Title text={title} />}
        <p data-testid="section-paragraph">{children}</p>
    </div>
)

export default Section
