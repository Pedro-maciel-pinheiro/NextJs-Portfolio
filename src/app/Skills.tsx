import React from 'react'
import './css/skills.css'
import { Skill_data } from '@/utils'
import SkillDataProvider from './sub/SkillDataProvider'




const Skills = () => {
    return (

        <section id='skill' className='skills-section'>

            <span className='skills-text'>
                <h1 className='skills-h1'>Skills</h1>
                Here are some of the tools I use to make my projects such as
                <p className='skills-p'>
                    html css  javascript  typescript
                    tailwind  github  react  next.js reactNative query angula figma
                </p>
            </span>

            <ul className='skills-icons'>
                <li>
                    {Skill_data.map((image, index) => (
                        <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}

                        />
                    ))}
                </li>
            </ul>

        </section>
    )
}

export default Skills