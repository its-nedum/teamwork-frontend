import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/signin'>Employee</NavLink></li>
            <li><NavLink to='/signinAdmin'>Admin</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks