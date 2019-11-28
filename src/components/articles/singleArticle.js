import React from 'react'
import {Link} from 'react-router-dom'

 const SingleArticle = (props) => {
    // console.log(props)
     const {article, deleteArticle} = props
  
    return (
            <div className="col s12 m8">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{article.title}</span>
                        <p>{article.article}</p>
                        <div className="card-action grey lighten-2 grey-text">
                             {article.created_at}
                           <Link to={`/articles/${article.id}/edit`} className="btn-floating pulse">
                            <i className="material-icons">edit</i>
                            </Link>
                            <Link to='#' className="btn-floating pulse red" onClick={()=> {deleteArticle(article.id)}}>
                            <i className="material-icons">remove</i>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default SingleArticle
