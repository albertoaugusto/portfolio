import { useState } from 'react'
import './header.css'

function Header () {
    /*menu toggle*/
    const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo">Portfólio</a>
            
            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active-link">
                            <i className="uil uil-estate nav-icon"></i> Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <i className="uil uil-user nav-icon"></i> Sobre
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#skills" className="nav-link">
                            <i className="uil uil-file-alt nav-icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#projects" className="nav-link">
                            <i className="uil uil-briefcase-alt nav-icon"></i> Projetos
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">
                            <i className="uil uil-scenery nav-icon"></i> Portfólio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact" className="nav-link">
                            <i className="uil uil-message nav-icon"></i> Contato
                        </a>
                    </li>
                </ul>
                {/*responsive button*/}
                <i className="uil uil-times nav-close" onClick={() => showMenu (!Toggle)}></i>
            </div>
            {/*responsive menu*/}
            <div className="nav-toggle" onClick={() => showMenu (!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header