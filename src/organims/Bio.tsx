import * as React from 'react'

import { useVisibility } from '@/hooks/useVisibility'

import { AutoChangableText } from '@src/atoms/AutoChangableText'
import { Logo } from '@/atoms/Logo'
import { Section } from '@/molecules/Section'

export const Bio = () => {
    const [isVisible, currentElement] = useVisibility<HTMLDivElement>(120)

    return (
        <div ref={currentElement}>
            <Logo isVisible={isVisible} />
            <Section id="home">
                Hello I'm @Christhoval.{' '}
                <AutoChangableText data={['A Software Developer', 'An Software Engineer', 'A Web Designer', 'An App\'s Creator', 'A Tech Enthusiast', 'A Technical Writer']} /> based in
                Panama. I specialise in creating web &amp; mobile apps using{' '}
                <b>python</b>, <b>js</b>/<b>ts</b>, <b>Atomic Architecture</b>,{' '}
                <b>React</b>, <b>flutter</b> and <b>Design Systems</b>.
            </Section>
        </div>
    )
}

export default Bio
