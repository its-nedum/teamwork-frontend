import React from 'react';
import {Redirect} from 'react-router-dom'

export const logOut = () => {
    localStorage.removeItem('teamworkToken')
    checkAuthToken()
}

export const checkAuthToken = () => {
    if(!localStorage.getItem('teamworkToken')){
        window.location.reload()
    }
}

export const decideLinks = () => {
    return localStorage.getItem('teamworkToken')
}