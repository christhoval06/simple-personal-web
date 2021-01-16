import * as React from 'react'

import { Bio } from '@/organims/Bio'
import { Projects } from '@/organims/Projects'
import { Clients } from '@/organims/Clients'
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
