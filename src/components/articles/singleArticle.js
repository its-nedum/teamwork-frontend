import React from 'react'

 const SingleArticle = () => {
    return (
            <div className="col s12 m8">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">This is my first article</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis molestiae eum qui ea laboriosam nihil hic eveniet quibusdam explicabo ex, vel aperiam asperiores eligendi deserunt enim ad veniam dolor aspernatur?</p>
                        <div className="card-action grey lighten-2 grey-text">
                            Created 14-11-2019
                           <a href="/articles/2/edit" className="btn-floating pulse">
                            <i className="material-icons">edit</i>
                            </a> 
                            <a href="/articles/2/delete" className="btn-floating pulse red">
                            <i className="material-icons">remove</i>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SingleArticle
