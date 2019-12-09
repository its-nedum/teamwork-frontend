import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { createArticle } from '../../store/actions/articlesActions'

class CreateArticle extends Component {
    state = {
        title: null,
        article: null,
        emptyVarError: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== null && this.state.article !== null){
            this.props.createArticle(this.state)   
        }else{
            this.setState({emptyVarError: 'All fields are required'})
        }
         
    }

    render() {
        const { notification, authToken } = this.props
        if(!authToken) return <Redirect to='/signin' />
        return (
            <div className='container'>
            <form className="white">
                <h5 className="grey-text text-darken-3">Create An Article</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field col s12">
                    <label htmlFor="article">Article</label>
                    <textarea id="article" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Post</button>
                </div>
                <div className="red-text center">
                        { notification ? <p>{ notification }</p> : null}
                        { this.state.emptyVarError}
                    </div>
                </form>
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
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)
