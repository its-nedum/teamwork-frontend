import React, { Component } from 'react'
import {connect} from 'react-redux'
import { postGifComment } from '../../store/actions/gifsActions'

class AddGifComment extends Component {
    state = {
        comment: '',
        gifId: this.props.gifId
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
        return (
          <div className="col s12 m4">
                 <form className="white chinedu">
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
        postComment: (comment) => dispatch(postGifComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(AddGifComment)
