import React from 'react'
import {NavLink} from 'react-router-dom'

const  About = () => {
        return (
            <div className="container row">
                <div className="white-text col s12 m8">
                <h4>Teamwork is an internal social network for employees of an organization. The goal of this
application is to facilitate more interaction between colleagues and promote team bonding.</h4>
                </div>
                <div className="white-text col s12 m4">
                <h4>Developed by</h4>
                <h5> Chinedu Emesue </h5>
                <span>(Full Stack Web Developer)</span>
                <h6>Github: <a href='https://github.com/its-nedum' target="_blank"> its-nedum</a></h6>
                <h6>Twitter: <a href='https://www.twitter.com/its_nedum' target="_blank">its_nedum</a></h6>
                <h6>Instagram: <a href='https://www.instagram.com/its_nedum' target="_blank">its_nedum</a></h6>
                <h6>Facebook: <a href='https://www.facebook.com/itsnedum' target="_blank"> itsnedum</a></h6>
                </div>
                        
            </div>
        )
    }

export default About
