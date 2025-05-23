import * as React from 'react'

import { Link } from '@/atoms/Link'
import { Section } from '@/molecules/Section'

type Item = [string, string]
const LINKS: Array<Item> = [
    ['Email', 'mailto:christhoval@icloud.com'],
    ['Whatsapp', 'https://wa.me/50761023295?text=Hi%20Christhoval!'],
    ['Twitter', 'https://twitter.com/christhoval'],
    ['LinkedIn', 'https://linkedin.com/in/christhoval'],
    ['Github', 'https://github.com/christhoval06'],
]

export const Socials = () => (
    <Section title="contac & social">
        {LINKS.map(([name, url]: Item) => (
            <Link key={name} href={url} isBlock={true}>
                {name}
            </Link>
        ))}
    </Section>
)

export default Socials
