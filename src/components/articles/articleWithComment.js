import React, {Component} from 'react'
import SingleArticle from './singleArticle'
import ArticleComment from '../comments/articleComment'
import AddArticleComment from '../comments/addArticleComment'

class ArticleWithComment extends Component {
    state = {
        article: []
    }

 async componentDidMount(){
      try {
      const response = await fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/articles/${this.props.match.params.articleId}`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg'
       }  
     })
     
     if(!response.ok){
         throw Error(response.statusText)
     }
     const myData = await response.json();
     this.setState({
         article: myData.data
     })
     console.log(myData)
   }catch(err){ 
       console.log(err)
   }
      
   }
    render(){
    return (
        <div className="container section">
            <div className="row">
                <SingleArticle article={this.state}/>
                <AddArticleComment />
            </div>
            <div className="row">
                <ArticleComment />
            </div>
        </div>
    )
}
}

export default ArticleWithComment