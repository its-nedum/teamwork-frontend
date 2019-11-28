import React from 'react'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import {Link} from 'react-router-dom'
import {decideLinks} from '../../helpers/util'
import {checkAuthToken} from '../../helpers/util'

const Navbar = () => {
    const links = decideLinks() ? <SignedInLinks /> : <SignedOutLinks />
    //checkAuthToken()
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = 'container'>
                <a href="" className="sidenav-trigger" data-target="signedIn-mobile-menu" >
                    <i className="material-icons">menu</i>
                </a>
                {links} 
                <Link to='/' className='brand-logo'>Teamwork App</Link>
            </div>
        </nav>
    )
}

export default Navbar
