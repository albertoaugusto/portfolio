import { useState } from 'react'
import './header.css'
import HeaderImg from '../../assets/formato-html.png'

function Header () {
    /*header color change*/
    window.addEventListener("scroll", function (){
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header");
    })
    /*menu toggle*/
    const[Toggle, showMenu] = useState(false);

    /*active link*/
    const[activeNav, setActiveNav] = useState("#home")
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo"> 
                <img src={HeaderImg} alt="html-tag-img" />
            </a>
            
            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-estate nav-icon"></i> Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-user nav-icon"></i> Sobre
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-file-alt nav-icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-briefcase-alt nav-icon"></i> Serviços
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-scenery nav-icon"></i> Portfólio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
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