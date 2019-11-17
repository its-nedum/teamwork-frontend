import React from 'react'
import SingleArticle from './singleArticle'
import ArticleComment from '../comments/articleComment'
import AddArticleComment from '../comments/addArticleComment'

const ArticleWithComment = () => {
    return (
        <div className="container section">
            <div className="row">
                <SingleArticle />
                <AddArticleComment />
            </div>
            <div className="row">
                <ArticleComment />
            </div>
        </div>
    )
}

export default ArticleWithComment