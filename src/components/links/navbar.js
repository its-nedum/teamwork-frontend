import React from 'react'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import AdminLinks from './adminLinks'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = 'container'>
                <a href="" className="sidenav-trigger" data-target="signedIn-mobile-menu" >
                    <i className="material-icons">menu</i>
                </a>
                <SignedInLinks />
                <SignedOutLinks />
                <AdminLinks /> 
                <Link to='/' className='brand-logo'>Teamwork App</Link>
            </div>
        </nav>
    )
}

export default Navbar
