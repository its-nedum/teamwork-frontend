import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createGif } from '../../store/actions/gifsActions'
import {Redirect} from 'react-router-dom'

class CreateGif extends Component {
    state = {
        title: '',
        gif: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFile = (e) => {
      this.setState({
        gif: e.target.files[0]
      })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
       this.props.createGif(this.state)
    }
    render() {
        const { notification, authToken } = this.props
        if(!authToken) return <Redirect to='/signin' />
        return (
            <div className='container'>
            <form className="white">
                <h5 className="grey-text text-darken-3">Create A Gif Post</h5>
                <div className="row">
                <div className="input-field col s12">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                
                <div className="file-field input-field col s12">
                <div className="btn">
                    <span>gif</span>
                    <input type="file" name="gif" onChange={this.handleFile}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Post</button>
                </div>
                <div className="red-text center">
                        { notification ? <p>{ notification }</p> : null}
                    </div>  
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.gif.notification,
        authToken: state.token.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGif: (newGif) => dispatch(createGif(newGif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGif)
