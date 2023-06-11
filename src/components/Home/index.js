import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <hr className="line" />
        <div className="home-section-container">
          <img
            className="home-image"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
          />
        </div>
      </div>
    )
  }
}
export default Home
