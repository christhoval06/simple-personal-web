import choice from '@src/utils/choice'
import shuffle from '@src/utils/shuffle'
import transformText from '@src/utils/transformText'
import * as React from 'react'

import { useVisibility } from '@/hooks/useVisibility'

import { Logo } from '@/atoms/Logo'
import { Section } from '@/molecules/Section'

interface AutoChangableTextProps {
    data: Array<string>
}

const AutoChangableText = ({ data }: AutoChangableTextProps) => {
    const wordRef = React.useRef<HTMLElement>(null)
    const _cycleTimeout = React.useRef<ReturnType<typeof setTimeout>>()

    React.useEffect(() => {
        nextCycle()
        return () => {
            if (_cycleTimeout.current) {
                clearTimeout(_cycleTimeout.current)
            }
        }
    }, [])

    const cycle = React.useCallback(() => {
        nextCycle()
        const node = wordRef.current
        if (node) {
            transformText(node, choice(shuffle(data)))
        }
    }, [data])

    const nextCycle = () => {
        if (_cycleTimeout.current) clearTimeout(_cycleTimeout.current)
        _cycleTimeout.current = setTimeout(cycle, 3500 + Math.random() * 900)
    }

    return <span ref={wordRef}>{choice(shuffle(data))}</span>
}

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
