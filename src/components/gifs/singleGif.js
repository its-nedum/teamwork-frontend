import React from 'react'
import {Link} from 'react-router-dom'


const SingleGif = (props) => {
    const {gif, deleteGif} = props
    return (
       <div className="col s12 m8">
            <div className="card z-depth-0">
            <div className="card-image">
                        <img src={gif.image_url} alt=""/>
                    </div>
                <div className="card-content">
                    <span className="card-title">{gif.title}</span>
                    <div className="card-action grey lighten-2 grey-text">
                        {gif.created_at}
                        <Link to="#" className="btn-floating pulse red" onClick={()=>{ deleteGif(gif.id)}}>
                        <i className="material-icons">remove</i>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleGif
