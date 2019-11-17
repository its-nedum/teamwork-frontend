import React, { Component } from 'react'

class CreateArticle extends Component {
    render() {
        return (
            <div className='container'>
            <form className="white">
                <h5 className="grey-text text-darken-3">Create An Article</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className="input-field col s12">
                    <label htmlFor="article">Article</label>
                    <textarea id="article" class="materialize-textarea"></textarea>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Post</button>
                </div>
                </form>
            </div>
        )
    }
}

export default CreateArticle
