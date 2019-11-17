import React, { Component } from 'react'

class CreateGif extends Component {
    render() {
        return (
            <div className='container'>
            <form className="white">
                <h5 className="grey-text text-darken-3">Create A Gif Post</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                
                <div className="file-field input-field col s12">
                <div className="btn">
                    <span>gif</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
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

export default CreateGif
