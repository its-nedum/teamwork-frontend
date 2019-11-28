import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleGif from './singleGif'
import AddGifComment from '../comments/addGifComment'
import GifComment from '../comments/gifComment'
import { deleteGif } from '../../store/actions/gifsActions'
import setAuthToken from '../../helpers/setAuthToken'

class GifWithComment extends Component {
    state = {
        gif: []
    }

 async componentDidMount(){
      try {
      const response = await fetch(`https://its-nedum-teamwork-api.herokuapp.com/api/v1/gifs/${this.props.match.params.gifId}`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': setAuthToken()
       }  
     })
     
     if(!response.ok){
         throw Error(response.statusText)
     }
     const myData = await response.json();
     this.setState({
         gif: myData.data
     })
    //console.log(myData)
   }catch(err){ 
       console.log(err)
   }
      
   }

   handleDelete = (gifId) => {
    this.props.deleteGif(gifId)
    }

   render(){
    const {gif} = this.state
    const comments = gif.comments
    const gifId = this.props.match.params.gifId;
    return (
        <div className="container section">
            <div className="row">
                <SingleGif gif={gif} deleteGif={this.props.deleteGif}/>
                <AddGifComment gifId={gifId}/>
            </div>
            <div className="row">
                <GifComment comments={comments}/>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteGif: (gifId) => dispatch(deleteGif(gifId))
    }
}

export default connect(null, mapDispatchToProps)(GifWithComment)
