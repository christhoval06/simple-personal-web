import * as React from 'react'

import { Section } from '@/molecules/Section'

const CLIENTS: Array<string> = [
    'Bluebanking Latam',
    'RugbyPTY',
    'MemesPTY',
    'Mapfre',
    'Liga Profutbol',
    'Trausthy',
    'ENA S.A',
]
export const Clients = () => (
    <Section title="some clients">{CLIENTS.join(', ')}.</Section>
)

export default Clients
