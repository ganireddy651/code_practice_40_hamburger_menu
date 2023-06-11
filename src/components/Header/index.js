import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <nav className="app-navbar">
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
      />
    </Link>
    <Link to="/popup" className="link">
      <button className="btn" type="button" data-testid="hamburgerIconButton">
        <GiHamburgerMenu className="hamburger-icon" />
      </button>
    </Link>
  </nav>
)

export default Header
