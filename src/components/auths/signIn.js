import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: null,
        password: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state) 
      this.props.login(this.state)    
    }

    render(){
        //console.log(this.props) 
        return(
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>LogIn</button>
                    </div>
                </form>
               
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)