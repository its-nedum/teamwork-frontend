import React, { Component } from 'react'
import bgImg from '../../images/teamwork-img.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="row">
                
                <img src={bgImg} className="responsive-img"/>            
               
            </div>
        )
    }
}

export default Home
