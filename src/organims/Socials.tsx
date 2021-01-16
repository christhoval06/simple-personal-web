import * as React from 'react'

import { Section } from '@/molecules/Section'
import { SocialLink } from '@/atoms/SocialLink'

type Item = [string, string]
const LINKS: Array<Item> = [
    ['Email', 'mailto:christhoval@icloud.com'],
    ['Whatsapp', 'https://wa.me/50761023295?text=Hi%20Christhoval!'],
    ['Twitter', 'https://twitter.com/christhoval'],
    ['Github', 'https://github.com/christhoval06'],
]

export const Socials = () => (
    <Section title="social">
        {LINKS.map(([name, url]: Item) => (
            <SocialLink key={name} href={url}>
                {name}
            </SocialLink>
        ))}
    </Section>
)

export default Socials
