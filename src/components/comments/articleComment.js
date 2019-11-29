import React from 'react'
import moment from 'moment'

 const ArticleComment = (props) => {
     const {comments} = props
    // console.log(comments) 
    return (
        <div className="col s12 m8">
        <h5 className="white-text left-align">Comments</h5>
        {comments && comments.map((comment) => {
        return(
            <div className="card z-depth-0" key={comment.id}>
                <div className="card-content">
                    <p>{comment.comment}</p>
                    <div className="card-action grey lighten-2 grey-text"><p> Posted {moment(comment.created_at).calendar()}</p></div>
                </div>
            </div>
        )
     })} 
        </div>
    )
}

export default ArticleComment
