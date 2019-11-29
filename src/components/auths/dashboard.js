import React, {Component} from 'react'
import Feeds from '../articles/feeds'
import setAuthToken from '../../helpers/setAuthToken'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

 class Dashboard extends Component {
     state = {
         feeds: []
     }

  async componentDidMount(){
       try {
       const response = await fetch('https://its-nedum-teamwork-api.herokuapp.com/api/v1/feed', {
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
          feeds: myData.data
      })
      
    }catch(err){ 
        console.log(err)
    }
       
    }
   

    render(){ 
       const {authToken} = this.props
       if(!authToken) return <Redirect to='/signin' />
        return (
            <div className="container row section">
                <Feeds feeds={this.state}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.token.authToken
    }
}

export default connect(mapStateToProps)(Dashboard)
