import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/signin'>SignIn</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks