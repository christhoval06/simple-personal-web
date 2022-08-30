import TweenLite, {Linear, gsap, Quint} from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin'

import shuffle from './shuffle'

gsap.registerPlugin(TextPlugin)

interface RollableHTMLElement extends HTMLElement {
    _isRollingText?: boolean
}

export default function transformText(node: RollableHTMLElement, text: string) {
    TweenLite.to(node, {
        text: text,
        ease: Quint.easeOut,
        overwrite: true,
        duration: 0.9,
    })
}

export function rollText(node: RollableHTMLElement) {
    if (node._isRollingText) return
    node._isRollingText = true

    let originalText = node.getAttribute('data-text')
    if (!originalText) {
        originalText = node.innerHTML
        node.setAttribute('data-text', originalText)
    }

    let tmpText = shuffle(node.innerHTML.split(''))
        .map((item) => {
            //return String.fromCharCode(item.charCodeAt(0) - 10 + Math.floor(Math.random() * 20))
            return String.fromCharCode(item.charCodeAt(0))
        })
        .join('')

    node.style.width =
        Math.round(
            parseFloat(
                window
                    .getComputedStyle(node)
                    .width.toString()
                    .replace('px', ''),
            ),
        ) + 'px'
    node.style.textAlign = 'center'

    let duration = tmpText.length * 0.01

    TweenLite.to(node, {
        duration,
        text: tmpText,
        ease: Linear.easeNone,
        overwrite: true,
        onComplete: function () {
            if (originalText) {
                TweenLite.to(node, {
                    duration,
                    text: originalText,
                    ease: Linear.easeNone,
                    overwrite: true,
                    onComplete: function () {
                        node.style.width = ''
                        node.style.textAlign = ''
                        node._isRollingText = false
                    },
                })
            }
        },
    })
}
