import { useState } from 'react'
import './services.css'

const Services = () => {
    {/*modal animation */}
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="services section" id="section">
        <h2 className="section-title">
            Serviços
        </h2>
        <span className="section-subtitle">
            Serviços oferecidos
        </span>
        <div className="services-container container grid">
            {/*card 1*/}
            <div className="services-content"> 
                <div>
                    <i className="uil uil-window-grid services-icon"></i>
                    <h3 className="services-title">
                        Front <br />
                        End
                    </h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(1)}> {/*modal open trigger*/}
                    Ver Mais
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>
                {/*modal 1*/}
                <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}> {/*modal open trigger*/}
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i> {/*modal close trigger*/}
                        <h3 className="services-modal-title">
                            Desenvolvimento Front End
                        </h3>
                        <p className="services-modal-description">
                            Mais de 1 ano de experiência em projetos reais para clientes e
                            projetos práticos.  
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Desenvolvimento de sites e landing pages
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Desenvolvimento de E-commerces
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Desenvolvimento de sites responsivos
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    SEO
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*card 2*/}
            <div className="services-content">
                <div>
                    <i className="uil uil-object-group services-icon"></i>
                    <h3 className="services-title">
                        UX|UI <br />
                        Designer
                    </h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(2)}> {/*modal open trigger*/}
                    Ver Mais
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>
                {/*modal 2*/}
                <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}> {/*modal open trigger*/}
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i> {/*modal close trigger*/}
                        <h3 className="services-modal-title">
                            UX/UI 
                            Designer
                        </h3>
                        <p className="services-modal-description">
                            Mais de 1 ano de experiência em projetos reais para clientes e
                            projetos práticos.  
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Criação de protótipos
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Criação de paleta de cores
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Desenvolvimento de sites responsivos
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    SEO
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*card 3*/ }
            <div className="services-content">
                <div>
                    <i className="uil uil-vector-square services-icon"></i>
                    <h3 className="services-title">
                        Designer <br />
                        Gráfico
                    </h3>
                </div>
                <span className="services-button"  onClick={() => toggleTab(3)}> {/*modal open trigger*/}
                    Ver Mais
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>
                {/*modal 3*/}
                <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}> {/*modal open trigger*/}
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i> {/*modal close trigger*/}
                        <h3 className="services-modal-title">
                            Designer
                            Gráfico
                        </h3>
                        <p className="services-modal-description">
                            Mais de 1 ano de experiência em projetos reais para clientes e
                            projetos práticos.  
                        </p>
                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Criação de logos
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Criação de identidade visual
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Criação de vetores
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Edição de imagem
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services