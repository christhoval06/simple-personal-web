import * as React from 'react'

import choice from '@src/utils/choice'
import shuffle from '@src/utils/shuffle'
import transformText from '@src/utils/transformText'

interface Props {
    data: Array<string>
}

export const AutoChangableText = ({ data }: Props) => {
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
