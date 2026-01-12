import Header from './components/Header'
import EducationSection from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <EducationSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />
      </div>
    </div>
  )
}
