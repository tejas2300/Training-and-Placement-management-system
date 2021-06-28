import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../action/authAcation";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { UserSidebarData } from './SidebarData';
import { AdminSidebarData } from './SidebarData';
import { HomeSidebarData } from './SidebarData';
import '../sidebar/Navbar.css';
import { IconContext } from 'react-icons';
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);




  return (
    <div>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {isAuth() && (<Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>)}
          <Link to='#' className='menu-bars'>

            {isAuth() && isAuth().role === 0 && (

              <Link className="owner" to="/user">
                {`${isAuth().name
                  }'s Dashboard`}
              </Link>
            )}
          </Link>
          <Link to='#' className='menu-bars'>

            {isAuth() && isAuth().role === 1 && (

              <Link to="/admin">
                {`${isAuth().name
                  }'s Dashboard`}
              </Link>
            )}
          </Link>
          <div className="signOut_btn">
          <Link to='#' className='menu-bars'>

            {isAuth() && (
              <Link to='#'
                style={{ cursor: "pointer" }}
                onClick={() => signout(() => history.push("/signin"))}>
                SignOut
              </Link>
            )}
          </Link>
          </div>




          <div className="Auth">
            {!isAuth() && (

              <Link to="/signup" className="Auth1">
                Sign UP
              </Link>
            )}


            {!isAuth() && (

              <Link to="/signin"  className="Auth2">
                LogIn
              </Link>
            )}
          </div>









        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>





            {isAuth() && isAuth().role === 0 && (

              UserSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }))}

            {isAuth() && isAuth().role === 1 && (

              AdminSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }))}


            {/* {!isAuth() && (

              HomeSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }))} */}

          </ul>
        </nav>

      </IconContext.Provider>
    </div>
  );
};


export default withRouter(Header)
