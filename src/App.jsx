import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'

function App () {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services/>
      <Portfolio />
      <Contact />
    </main>

    </>
  )
}

export default App
