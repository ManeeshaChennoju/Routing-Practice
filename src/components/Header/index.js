import './index.css'

import {Link} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Contact from '../Contact'

const waveImg = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'

const Header = () => (
  <nav className="nav_container">
    <div className="logo_container">
      <img src={waveImg} alt="wave" className="waveImage" />
      <p className="waveName">Wave</p>
    </div>
    <ul className="ul_container">
      <li className="list_items">
        <Link className="nav_link" to="/">
          Home
        </Link>
      </li>
      <li className="list_items">
        <Link className="nav_link" to="/about">
          About
        </Link>
      </li>
      <li className="list_items">
        <Link className="nav_link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
