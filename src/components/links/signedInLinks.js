import React from 'react'
import {NavLink} from 'react-router-dom'
import {logOut, getToken} from '../../helpers/util'
import jwt_decode from 'jwt-decode'

const SignedInLinks = () => {
    const decoded = jwt_decode(getToken())
    const {admin} = decoded;
    
    if(admin === 'True') {
        return (
            <div>
            <ul className='right hide-on-med-and-down'>
                <li><NavLink to='/signup'>Create Employee</NavLink></li>
                <li><NavLink to='/feed'>Feed</NavLink></li>
                <li><NavLink to='/articles'>Create Article</NavLink></li>
                <li><NavLink to='/gifs'>Create Gif</NavLink></li>
                <li><NavLink to='#' onClick={() => logOut()}>LogOut</NavLink></li>
                <li><NavLink to='/feed' className="btn btn-floating pink lighten-1"><i className="material-icons">face</i></NavLink></li>
            </ul>
            <ul className="sidenav" id='signedIn-mobile-menu'>
                <li><NavLink to='/signup'>Create Employee</NavLink></li>
                <li><NavLink to='/feed'>Feed</NavLink></li>
                <li><NavLink to='/articles'>Create Article</NavLink></li>
                <li><NavLink to='/gifs'>Create Gif</NavLink></li>
                <li><NavLink to='#' onClick={() => logOut()}>LogOut</NavLink></li>
            </ul>
            </div>
        )
    }else{
        return (
            <div>
            <ul className='right hide-on-med-and-down'>
                <li><NavLink to='/feed'>Feed</NavLink></li>
                <li><NavLink to='/articles'>Create Article</NavLink></li>
                <li><NavLink to='/gifs'>Create Gif</NavLink></li>
                <li><NavLink to='#' onClick={() => logOut()}>LogOut</NavLink></li>
                <li><NavLink to='/feed' className="btn btn-floating pink lighten-1"><i className="material-icons">face</i></NavLink></li>
            </ul>
            <ul className="sidenav" id='signedIn-mobile-menu'>
                <li><NavLink to='/feed'>Feed</NavLink></li>
                <li><NavLink to='/articles'>Create Article</NavLink></li>
                <li><NavLink to='/gifs'>Create Gif</NavLink></li>
                <li><NavLink to='#' onClick={() => logOut()}>LogOut</NavLink></li>
            </ul>
            </div>
        )
    }
}

export default SignedInLinks
