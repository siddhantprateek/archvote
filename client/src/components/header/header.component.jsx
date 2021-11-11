import './header.styles.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.svg"
// import { Join } from '../login-button/login.component';
import { useAuth0 } from "@auth0/auth0-react";
// import { Logout } from '../logout-button/logout.component';
export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

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
          <li>{ isAuthenticated && (
                      <Link className="options" to="/dashboard">Dashboard</Link>
                )}
            </li>
          <li><Link className="options" to="/contact">Contact</Link></li>
          <li>
            <form action="">
              <input
                className="search-box" 
                placeholder="Search"
              />
              { !isAuthenticated && (
                      <button 
                      className="btn"
                      onClick={() => loginWithRedirect()} 
                      >Log In</button>
                )}
                { isAuthenticated && (
   
                      <button 
                      className="btn" 
                      onClick={() => logoutWithRedirect()} 
                      >Logout</button>

                )}
              {/* <button className="btn">Join</button> */}

            </form>
          </li>
        </ul>
      </nav>
    </div>
    </header>

  )
}