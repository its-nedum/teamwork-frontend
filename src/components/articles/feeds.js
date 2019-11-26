import React from 'react'
import {Link} from 'react-router-dom'

const Feeds = (props) => {
    //console.log(props)
    const {feeds} = props
    const allFeeds = feeds.feeds
    
    console.log(allFeeds)
    return (
        <div className="col s12 m9">
        { allFeeds && allFeeds.map(feed => {
            
        return (
                <div className="card z-depth-0" >
                <div className="card-content">
                    <span className="card-title">{feed.title}</span>
                    <p className="truncate">BODY</p>
                    <div className="card-action">
                        <Link to={"/articles/2" }>More Details</Link>
                    </div>
                </div>
            </div>
        )
    })} 

        </div>
    )
}

export default Feeds