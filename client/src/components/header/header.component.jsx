import './header.styles.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.svg"


export default function Header() {
  return (
    <header>
    <div className="container">
      <nav className="navbar">
        <div className="Applogo">
          {/* App logo */}
          <Link to="/">
            <img src={logo} className="AppLogo" alt="logo" />
          </Link>
        </div>

        {/* Application navigation options */}
        <ul className="nav-list">
          <li><Link className="options" to="/">Home</Link></li>
          <li><Link className="options" to="/dashboard">Dashboard</Link></li>
          <li><Link className="options" to="/contact">Contact</Link></li>
          <li>
            <form action="">
              <input
                className="search-box" 
                placeholder="Search"
              />
              <Link to="/join"><button className="btn">Join</button></Link>
            </form>
          </li>
        </ul>
      </nav>
    </div>
    </header>

  )
}
