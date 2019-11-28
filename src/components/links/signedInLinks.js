import React from 'react'
import {NavLink} from 'react-router-dom'
import {logOut} from '../../helpers/util'

const SignedInLinks = () => {
    return (
        <div>
        <ul className='right hide-on-med-and-down'>
            <li><NavLink to='/signup'>Create Employee</NavLink></li>
            <li><NavLink to='/articles'>Create Article</NavLink></li>
            <li><NavLink to='/gifs'>Create Gif</NavLink></li>
            <li><NavLink to='#' onClick={() => logOut()}>LogOut</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1"><i className="material-icons">face</i></NavLink></li>
        </ul>
        <ul className="sidenav" id='signedIn-mobile-menu'>
            <li><NavLink to='/signup'>Create Employee</NavLink></li>
            <li><NavLink to='/articles'>Create Article</NavLink></li>
            <li><NavLink to='/gifs'>Create Gif</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
        </ul>
        </div>
    )
}

export default SignedInLinks
