import React from 'react'
import SingleGif from './singleGif'
import AddGifComment from '../comments/addGifComment'
import GifComment from '../comments/gifComment'

const GifWithComment = () => {
    return (
        <div className="container section">
            <div className="row">
                <SingleGif />
                <AddGifComment />
            </div>
            <div className="row">
                <GifComment />
            </div>
        </div>
    )
}

export default GifWithComment
