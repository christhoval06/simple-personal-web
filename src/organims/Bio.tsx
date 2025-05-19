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
                <p>
                Hi I'm @Christhoval.{' '}
                <AutoChangableText data={['A Software Developer', 'An Software Engineer', 'An App\'s Cook', 'A Tech Enthusiast', 'A Technical Writer', 'A Team Lead']} /> based in
                Panama. I specialise in creating web &amp; mobile apps using{' '}
                I have <b>10+ years</b> of experience building high-impact digital products, 
                especially in the <b>Fintech</b> and <b>mobile app</b> industries. 
                I specialize in <b>full-stack development</b> with technologies 
                like <b>React</b>, <b>React Native</b>, <b>Python</b>, <b>Django</b>, and <b>GraphQL</b>.
                </p>

                <p>
                I'm passionate about delivering <b>scalable</b>, <b>user-focused</b> solutions 
                that align with business goals. From implementing <b>atomic design systems</b> 
                to optimizing <b>CI/CD pipelines</b>, I focus on clean code, performance, and measurable results.
                </p>

                <p>
                As a former tech lead, I’ve successfully led teams, mentored developers, 
                and driven end-to-end product development — from ideation to launch.
                </p>
            </Section>
        </div>
    )
}

export default Bio
