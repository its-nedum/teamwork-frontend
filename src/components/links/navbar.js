import React from 'react'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import {Link} from 'react-router-dom'
import {getToken} from '../../helpers/util'


const Navbar = () => {
   
    const links = getToken() ? <SignedInLinks /> : <SignedOutLinks />
    
    return (
        <nav className="nav-wrapper transparent">
            <div className = 'container'>
                <Link to="#" className="sidenav-trigger" data-target="signedIn-mobile-menu" >
                    <i className="material-icons">menu</i>
                </Link>
                {links} 
                <Link to='/' className='brand-logo'>Teamwork</Link>
            </div>
        </nav>
    )
}

export default Navbar
