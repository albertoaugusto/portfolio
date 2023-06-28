import './scrolltop.css'

const ScrollTop = () => {
    {/*scroll show*/}
    window.addEventListener("scroll", function (){
        const scrollUp = document.querySelector(".scrolltop");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll");
    })

  return (
    <a href="#" className="scrolltop">
        <i className="uil uil-arrow-up scrolltop-icon"></i>
    </a>
  )
}

export default ScrollTop