import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postArticleComment} from '../../store/actions/articlesActions'

class AddArticleComment extends Component {
    state = {
        comment: null,
        articleId: this.props.articleId,
        emptyVarError: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
       if(this.state.comment !== null){
        this.props.postComment(this.state)
       } else{
           this.setState({emptyVarError: 'All fields are required'})
       }
        
    }

    render() {
        const {notification} = this.props
        return (
            <div className="col s12 m4">
                 <form className="white">
                    <div className="input-field">
                        <label htmlFor="comment">Comment</label>
                        <input type="text" id="comment" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Post</button>
                    </div>
                    <div className="red-text center">
                        { notification ? <p>{ notification }</p> : null}
                        { this.state.emptyVarError }
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
        postComment: (comment) => dispatch(postArticleComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleComment)
