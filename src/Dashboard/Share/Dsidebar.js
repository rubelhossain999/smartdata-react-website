import { faSliders, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "../Dapp.css"

const Dsidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-text mx-3">Smart DATA</div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span className='ml-2'>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard/sliders">
                <FontAwesomeIcon icon={faSliders} />
                    <span className='ml-2'>All Sliders</span></Link>
            </li>
            <hr className="sidebar-divider" />
        </ul>
    );
};

export default Dsidebar;