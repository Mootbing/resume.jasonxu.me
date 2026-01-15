'use client'

import { useState } from 'react'

const skills = [
  'Python',
  'Java',
  'TypeScript',
  'React',
  'Next.js',
  'C++',
  'HTML',
  'CSS',
  'Tailwind',
  'OCaml',
  'SQL',
  'Unreal Engine',
  'Expo',
  'React Native',
  'Git',
  'Firebase',
  'Supabase',
  'Hasura',
  'GraphQL',
  'Postgres',
  'AWS',
  'GCP',
  'Azure',
  'CI/CD',
  'Figma',
]

export default function SkillsSection() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleSkills = () => {
    if (isCollapsed) {
      setIsCollapsed(false)
      setIsAnimating(true)
      const listEl = document.getElementById('skillsList')
      if (listEl) {
        const tags = listEl.querySelectorAll('.skill-tag')
        let index = 0
        const animateNext = () => {
          if (index < tags.length) {
            const tag = tags[index] as HTMLElement
            tag.classList.add('fade-in')
            index++
            setTimeout(animateNext, 50)
          } else {
            setTimeout(() => setIsAnimating(false), 200)
          }
        }
        setTimeout(animateNext, 50)
      }
    } else {
      setIsCollapsed(true)
      setIsAnimating(false)
      const listEl = document.getElementById('skillsList')
      if (listEl) {
        listEl
          .querySelectorAll('.skill-tag')
          .forEach((tag) => tag.classList.remove('fade-in'))
      }
    }
  }

  return (
    <section
      id="skillsSection"
      className={isCollapsed ? 'collapsed' : ''}
    >
      <h2
        className={`skills-toggle ${isCollapsed ? 'collapsed' : ''}`}
        onClick={toggleSkills}
      >
        Technical Skills
      </h2>
      <div
        id="skillsList"
        className={`skills-list ${isCollapsed ? 'collapsed' : ''} ${isAnimating ? 'animating' : ''}`}
      >
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
