import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editArticle} from '../../store/actions/articlesActions'

class EditArticle extends Component {
    state = {
        title: '',
        article: '',
        article_id: this.props.match.params.articleId
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.editArticle(this.state)
    }

    render() {
        //console.log(this.props)
        return (
            <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">Edit An Article</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field col s12">
                    <label htmlFor="article">Article</label>
                    <textarea id="article" class="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Update</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editArticle: (article) => dispatch(editArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(EditArticle)
