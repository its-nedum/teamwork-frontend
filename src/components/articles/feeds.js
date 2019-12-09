import React from 'react'
import {Link} from 'react-router-dom'

const Feeds = (props) => {
    //console.log(props)
    const {feeds} = props
    //console.log(feeds)
    return (
        <div className="col s12">
        { feeds && feeds.map(feed => {
            
        return (
                <div className="card z-depth-0" key={feed.id}>
                <div className="card-content">
                    <span className="card-title">{feed.title}</span>
                    {
                        feed.image_url ? <img src={feed.image_url} alt='gifImage' /> :
                        <p className="truncate">{feed.article}</p>
                    }
                    <div className="card-action">
                    {
                       feed.image_url ? <Link to={`/gifs/${feed.id}`}>More Details</Link> :
                       <Link to={`/articles/${feed.id}`}>More Details</Link>
                    }
                    </div>
                </div>
            </div>
        )
    })} 

        </div>
    )
}

export default Feeds