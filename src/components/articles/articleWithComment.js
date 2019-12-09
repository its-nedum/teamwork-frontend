import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleArticle from './singleArticle'
import ArticleComment from '../comments/articleComment'
import AddArticleComment from '../comments/addArticleComment'
import {deleteArticle} from '../../store/actions/articlesActions'
import setAuthToken from '../../helpers/setAuthToken'
import {Redirect} from 'react-router-dom'
import {ClipLoader} from 'react-spinners'

class ArticleWithComment extends Component {
    state = {
        article: [],
        isLoaded: false
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
    this.setState({isLoaded: true})
   }catch(err){ 
       console.log(err)
   }
      
   }

   handleDelete = (articleId) => {
    this.props.deleteArticle(articleId)
    }

    render(){
        const {authToken} = this.props
        const {article} = this.state
        const comments = article.comments
        const articleId = this.props.match.params.articleId;
        if(!authToken) return <Redirect to='/signin' />
    return (
        <div className="container section">
            {this.state.isLoaded ?
            <div>
            <div className="row">
                <SingleArticle article={article} deleteArticle={this.props.deleteArticle}/>
                <AddArticleComment articleId={articleId}/>
            </div>
            <div className="row">
                <ArticleComment comments={comments}/>
            </div>
            </div>
            : <div className="sweet-loading">
                <ClipLoader 
                    sizeUnit={"px"}
                    size={200}
                    color={"#0659FB"}
                    loading={this.state.loading}
                />
            </div>
            }
            
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        authToken: state.token.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticle: (articleId) => dispatch(deleteArticle(articleId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWithComment)