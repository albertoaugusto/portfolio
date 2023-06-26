import './skills.css'
import FrontEnd from './FrontEnd'
import SoftSkills from './SoftSkills'

const Skills = () => {
  return (
    <section className="skills section" id="skills"> 
        <h2 className="section-title">
            Habilidades
        </h2>
        <span className="section-subtitle">
            Minhas habilidades técnicas
        </span>

        <div className="skills-container container grid">
            <FrontEnd />
            <SoftSkills />        
        </div>
    </section>
  )
}

export default Skills