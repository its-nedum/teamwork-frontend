import React from 'react'
import {NavLink} from 'react-router-dom'

const AdminLinks = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/signup'>Create Employee</NavLink></li>
        </ul>
    )
}

export default AdminLinks