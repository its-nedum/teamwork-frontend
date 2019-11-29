import React from 'react'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import {Link} from 'react-router-dom'
import {decideLinks} from '../../helpers/util'


const Navbar = () => {
   
    const links = decideLinks() ? <SignedInLinks /> : <SignedOutLinks />
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className = 'container'>
                <Link to="#" className="sidenav-trigger" data-target="signedIn-mobile-menu" >
                    <i className="material-icons">menu</i>
                </Link>
                {links} 
                <Link to='/' className='brand-logo'>Teamwork App</Link>
            </div>
        </nav>
    )
}

export default Navbar
