import React from 'react'
import {Link} from 'react-router-dom'
import {getToken} from '../../helpers/util'
import jwt_decode from 'jwt-decode'
import moment from 'moment'



const SingleGif = (props) => {
    const {gif, deleteGif} = props
    const decoded = jwt_decode(getToken())
    const {email} = decoded;
    const deleteBtn = email === gif.user_id

    const showDelete = deleteBtn ? <Link to="#" className="btn-floating pulse red" onClick={()=>{ deleteGif(gif.id)}}>
    <i className="material-icons">remove</i>
    </Link>  : null 

    return (
       <div className="col s12 m8">
            <div className="card z-depth-0">
            <div className="card-image">
                        <img src={gif.image_url} alt="gifImage" className="responsive-img"/>
                    </div>
                <div className="card-content">
                    <span className="card-title">{gif.title}</span>
                    <div className="card-action grey lighten-2 grey-text">
                        <p> Posted {moment(gif.created_at).calendar()}</p>  
                        {showDelete} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleGif
