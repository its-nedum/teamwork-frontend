import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
        gender: '',
        jobRole: '',
        department: '',
        address: '',
        isAdmin: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createUser(this.state)
    }

    render() {
        const {authToken} = this.props
        if(!authToken) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Create Employee Account</h5>
                    <div className="row">
                    <div className="input-field col s12 m6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 m6">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 m3">
                        <label htmlFor="phoneNo">Phone No</label>
                        <input type="text" id="phoneNo" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="jobRole">Job Role</label>
                        <input type="text" id="jobRole" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s9">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s3">
                        <label htmlFor="isAdmin">IsAdmin? (True/False)</label>
                        <input type="text" id="isAdmin" onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.token.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
