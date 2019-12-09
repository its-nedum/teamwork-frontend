import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editArticle} from '../../store/actions/articlesActions'
import setAuthToken from '../../helpers/setAuthToken'
import {Redirect} from 'react-router-dom'
import {ClipLoader} from 'react-spinners'

class EditArticle extends Component {
    state = {
        title: '',
        article: '',
        article_id: this.props.match.params.articleId,
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
         const  articleToEdit = myData.data
          this.setState({
              title: articleToEdit.title,
              article: articleToEdit.article
          })
          this.setState({isLoaded: true})
         }catch(err){ 
             console.log(err)
         }
            
         }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.editArticle(this.state)
    }

    render(){
        
        const { notification, authToken } = this.props
        if(!authToken) return <Redirect to='/signin' />
        return (
            <div className="container">
            {this.state.isLoaded ?
                <form className="white">
                <h5 className="grey-text text-darken-3">Edit An Article</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="input-field col s12">
                    <label htmlFor="article">Article</label>
                    <textarea id="article" className="materialize-textarea" value={this.state.article} onChange={this.handleChange}></textarea>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Update</button>
                </div>
                <div className="red-text center">
                        { notification ? <p>{ notification }</p> : null}
                    </div>
                </form>
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
        notification: state.article.notification,
        authToken: state.token.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editArticle: (article) => dispatch(editArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle)
