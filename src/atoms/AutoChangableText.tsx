import React, {useEffect, useCallback} from 'react'

import choice from '@src/utils/choice'
import shuffle from '@src/utils/shuffle'
import transformText from '@src/utils/transformText'

interface Props {
    data: Array<string>
}

export const AutoChangableText = ({ data }: Props) => {
    const wordRef = React.useRef<HTMLElement>(null)
    const _cycleTimeout = React.useRef<ReturnType<typeof setTimeout>>()

    const nextCycle = useCallback(() => {
        if (_cycleTimeout.current) clearTimeout(_cycleTimeout.current)
        _cycleTimeout.current = setTimeout(() => {
            nextCycle()
        const node = wordRef.current
        if (node) {
            transformText(node, choice(shuffle(data)))
        }
        }, 3500 + Math.random() * 900)
    }, [data]);

    useEffect(() => {
        nextCycle()
        return () => {
            if (_cycleTimeout.current) {
                clearTimeout(_cycleTimeout.current)
            }
        }
    }, [nextCycle])

    return <span ref={wordRef}>{choice(shuffle(data))}</span>
}
