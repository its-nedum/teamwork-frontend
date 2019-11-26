import React, {Component} from 'react'
import Feeds from '../articles/feeds'
import { connect } from 'react-redux'


 class Dashboard extends Component {
     state = {
         feeds: []
     }

  async componentDidMount(){
       try {
       const response = await fetch('https://its-nedum-teamwork-api.herokuapp.com/api/v1/feed', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwaUBnbWFpbC5jb20iLCJpYXQiOjE1NzQyNjM0NjksImV4cCI6MTU3NDg2ODI2OX0.NyY7lZsU_954vXu0KhcNU_PBz-nwqPRF31fpzWJcZbg'
        }
      })
      
      if(!response.ok){
          throw Error(response.statusText)
      }
      const myData = await response.json();
      this.setState({
          feeds: myData.data
      })
      //console.log(this.state)
    }catch(err){ 
        console.log(err)
    }
       
    }
   

    render(){ 
       //console.log(this.props)
        //const { feeds } = this.props;
        return (
            <div className="container row section">
                <Feeds feeds={this.state}/> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feeds: state.feed.feeds
    }
}

export default connect(mapStateToProps)(Dashboard)
