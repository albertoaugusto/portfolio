import './home.css'
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'

const Home = () => {
  return (
    <section className="home section">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social />

                <div className="home-img"></div>

                <Data />    
            </div>

            <Scroll />
        </div>
    </section>
  )
}

export default Home