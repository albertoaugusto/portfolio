import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">
                Alberto Souza | Portfólio
            </h1>

            <ul className="footer-list">
                <li>
                    <a className="footer-link" href="#about">Sobre</a>
                </li>
                <li>
                    <a className="footer-link"  href="#skills">Skills</a>
                </li>
                <li>
                    <a className="footer-link" href="#portfolio">Portfólio</a>
                </li>
            </ul>

            <div className="footer-social">
                <a href="https://www.linkedin.com/in/alberto-souza-b4a1451b5/" rel="noreferrer"className="home-social-icon" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="https://github.com/albertoaugusto" rel="noreferrer" className="home-social-icon" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer-copy">
                &#169; Alberto Souza. Todos os direitos reservados.
            </span>
        </div>
    </footer>
  )
}

export default Footer