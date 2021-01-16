import React from 'react'
import { createRef, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export function useVisibility<Element extends HTMLElement>(
    offset = 0,
    throttleMilliseconds = 100,
): [boolean, React.RefObject<Element>] {
    const [isVisible, setIsVisible] = useState(false)
    const currentElement = createRef<Element>()

    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsVisible(false)
            return
        }
        // const height = window.innerHeight || document.documentElement.clientHeight
        const { bottom } = currentElement.current.getBoundingClientRect()
        setIsVisible(!(bottom <= 0))
    }, throttleMilliseconds)

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })

    return [isVisible, currentElement]
}

export default useVisibility
