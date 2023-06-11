import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <hr className="line" />
    <div className="about-section-container">
      <img
        className="about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
      />
    </div>
  </>
)

export default About
