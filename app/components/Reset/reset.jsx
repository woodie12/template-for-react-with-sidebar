/*This is the login page(route) from the dashboard, Login is the main component. This page uses React framework and
* semantic-ui-react library for layout. */

import React, { Component } from 'react'
import { Divider,
    Input,
    Button } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom'
import './reset.scss'

/*Ths is the main component for login.*/
class Login extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = 'login-container'>
                <div className = 'login'>
                    <img src ={require('../asset/logo.png')}/>
                    <h1>Request password reset code</h1>
                    <Divider horizontal inverted/>
                    <hr color = "white"/>
                    <br />
                    <Input size='large' placeholder = "Email" fluid />
                    <br />
                    <span className = "float-right">
                        <Link className = "margin-right-20" to='/'>Cancel</Link>
                        <Button className = "button">Accept</Button>
                    </span>
                </div>
                /*This is the footer from the page*/
                <div className="footer-container">
                    <footer>
                        <div className="row">
                            <p className="margin-right-20">© 2016-{(new Date().getFullYear())} Xaptum, Inc.  <a href="mailto:social@xaptum.com">Contact us.</a></p>
                            <div className="col s1 right-align">
                                <p className="build-id">v2.0.0-1</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Login