import React, { Component } from 'react'

class AddGifComment extends Component {
    render() {
        return (
          <div className="col s12 m4">
                 <form className="white chinedu">
                    <div className="input-field">
                        <label htmlFor="comment">Comment</label>
                        <input type="text" id="comment" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddGifComment
