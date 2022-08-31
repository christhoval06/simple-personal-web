import * as React from 'react'

import { Section } from '@/molecules/Section'

const CLIENTS: Array<string> = [
    'MFTech',
    'Bluebanking Latam',
    'Nuerly Labs',
    'LogicStudio',
    'RugbyPTY',
    'MemesPTY',
    'Mapfre',
    'Liga Profutbol',
    'Trausthy',
    '3Tech Panama',
    'ENA',
]
export const Clients = () => (
    <Section title="some clients">{CLIENTS.join(', ')}.</Section>
)

export default Clients
