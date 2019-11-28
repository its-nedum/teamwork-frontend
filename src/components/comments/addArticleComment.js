import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postArticleComment} from '../../store/actions/articlesActions'

class AddArticleComment extends Component {
    state = {
        comment: '',
        articleId: this.props.articleId
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.postComment(this.state)
    }

    render() {
        //console.log(this.props)
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
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (comment) => dispatch(postArticleComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(AddArticleComment)
