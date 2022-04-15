import * as React from 'react'

import { Bio } from '@/organims/Bio'
import { Clients } from '@/organims/Clients'
import { Projects } from '@/organims/Projects'
import { Socials } from '@/organims/Socials'

import { Single } from '@/templates/Single'

export const Main = () => (
    <Single>
        <Bio />
        <Clients />
        <Projects />
        <Socials />
    </Single>
)

export default Main
