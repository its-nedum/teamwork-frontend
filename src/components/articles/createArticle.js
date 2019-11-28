import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticle } from '../../store/actions/articlesActions'

class CreateArticle extends Component {
    state = {
        title: '',
        article: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.props)
      this.props.createArticle(this.state)      
    }

    render() {
        const { notification } = this.props
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
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.article.notification
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)
