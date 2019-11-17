import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Create Employee Account</h5>
                    <div className="row">
                    <div className="input-field col s12 m6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 m6">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-field col s12 m6">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 m3">
                        <label htmlFor="phone">Phone No</label>
                        <input type="text" id="phone" />
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" />
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="jobrole">Job Role</label>
                        <input type="text" id="jobrole" />
                    </div>
                    <div className="input-field col s12 m3">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" />
                    </div>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignUp
