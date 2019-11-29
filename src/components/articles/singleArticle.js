import React from 'react'
import {Link} from 'react-router-dom'
import {getToken} from '../../helpers/util'
import jwt_decode from 'jwt-decode'
import moment from 'moment'

 const SingleArticle = (props) => {
     const {article, deleteArticle} = props
     const decoded = jwt_decode(getToken())
     const {email} = decoded;
     const actionBtn = email === article.userId
    
     const showActionBtn = actionBtn ?
     <div>
        <Link to={`/articles/${article.id}/edit`} className="btn-floating pulse">
            <i className="material-icons">edit</i>
        </Link>
        <Link to='#' className="btn-floating pulse red" onClick={()=> {deleteArticle(article.id)}}>
            <i className="material-icons">remove</i>
        </Link> </div> : null

    return (
            <div className="col s12 m8">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{article.title}</span>
                        <p>{article.article}</p>
                        <div className="card-action grey lighten-2 grey-text">
                           <p> Posted {moment(article.created_at).calendar()}</p>  
                           {showActionBtn} 
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default SingleArticle
