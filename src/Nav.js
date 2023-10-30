import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import userContext from "./userContext";
/** Renders nav bar with navlinks
 *
 * Returns:
 * - Navbar according to logged in vs logged out (derived from userContext)
 *
 * App -> Nav
 *
 */
function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return (
    <header className='header'>
      <nav className='nav'>
        {currentUser && (
          <div className='main-nav'>
            <NavLink to='/' >
              Jobly
            </NavLink>
            <NavLink to='/companies' >
              CompanyList
            </NavLink>
            <NavLink to='/jobs' >
              JobList
            </NavLink>
            <NavLink to='/profile' >
              Profile
            </NavLink>
            <Link to='/' onClick={logout} >
              Log out {currentUser.username}
            </Link>
          </div>
        )}

        {!currentUser && (
          <div className='main-nav'>
            <NavLink to='/' >
              Jobly
            </NavLink>
            <NavLink to='/login' >
              Login
            </NavLink>
            <NavLink to='/signup' >
              Signup
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
