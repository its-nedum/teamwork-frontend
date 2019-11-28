import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleArticle from './singleArticle'
import ArticleComment from '../comments/articleComment'
import AddArticleComment from '../comments/addArticleComment'
import {deleteArticle} from '../../store/actions/articlesActions'
import setAuthToken from '../../helpers/setAuthToken'

class ArticleWithComment extends Component {
    state = {
        article: []
    }

 async componentDidMount(){
      try {
      const response = await fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${this.props.match.params.articleId}`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': setAuthToken()
       }  
     })
     
     if(!response.ok){
         throw Error(response.statusText)
     }
     const myData = await response.json();
     this.setState({
         article: myData.data
     })
    // console.log(myData)
   }catch(err){ 
       console.log(err)
   }
      
   }

   handleDelete = (articleId) => {
    this.props.deleteArticle(articleId)
    }

    render(){
        //console.log(this.props)
        const {article} = this.state
        const comments = article.comments
        const articleId = this.props.match.params.articleId;
    return (
        <div className="container section">
            <div className="row">
                <SingleArticle article={article} deleteArticle={this.props.deleteArticle}/>
                <AddArticleComment articleId={articleId}/>
            </div>
            <div className="row">
                <ArticleComment comments={comments}/>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticle: (articleId) => dispatch(deleteArticle(articleId))
    }
}

export default connect(null, mapDispatchToProps)(ArticleWithComment)