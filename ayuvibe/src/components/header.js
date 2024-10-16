import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Navbar = () => {
  return (
    <div>
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <ul className="top-bar-info list-inline-item pl-0 mb-0">
                            <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@ayuvibe.com</a></li>
                            <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Gate No 57, Shirsoli Rd, Tambapura, Mohadi, Maharashtra 425002 </li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                            <a href="tel:0257 226 4881" >
                                <span>Call Now : </span>
                                <span className="h4">0257 226 4881</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
        <nav className="navbar navbar-expand-lg navigation" id="navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="img-fluid" />
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icofont-navigation-menu"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarmain">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                
                    <li className="nav-item ">
                        <Link className="nav-link" to="/doctors">Doctors</Link>
                    </li>

                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link to="/patient_login" className="btn btn-main-2 btn-icon btn-round-full nav-link text-white">Login</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
