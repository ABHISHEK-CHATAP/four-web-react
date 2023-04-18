import React, { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom';


function Navbar() {
     const [show, setshow] = useState(false);

    return (
        <>
            <sectiion className='Navbar-bg'>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href='/' >ABHI</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                              onClick={()=>{setshow(!show)}}  >  
                               {/* here used Hook */}
                            <span className="navbar-toggler-icon"></span>
                        </button>                                 {/* here used Hook */}
                        <div className={`collapse navbar-collapse ${show ? "show" : " " }`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink  className="nav-link " aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-style " type="submit">sign up</button>
                                <button className="btn btn-style btn-style-border" type="submit">log in</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Outlet/>
            </sectiion>
        </>
    )
}
export default Navbar;