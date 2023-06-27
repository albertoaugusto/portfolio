import './portfolio.css'
import Services from './Services'

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section-title">Portfólio</h2>    
        <span className="section-subtitle">
            Serviços realizados
        </span>

        <Services/>
    </section>
    
  )
}

export default Portfolio