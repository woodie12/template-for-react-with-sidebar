import React, { Component } from 'react'
import { Divider,
    Input,
    Button } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom'
import './accept.scss'
//axios is used for calling the api
import axios from 'axios'

//'/accept' route

class Accept extends Component {
    constructor(props){
        super(props);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
        this.onChangeEmailSignUp = this.onChangeEmailSignUp.bind(this);
        this.onChangePasswordSignUp = this.onChangePasswordSignUp.bind(this);
        this.state = {
            register_user:{
                username: "",
                token: ""
            }
        }
    }
    onSignupSubmit(e) {
        // console.log("username", this.state.register_user.username);
        // console.log("token", this.state.register_user.token);
        e.preventDefault();
        axios.post('', {


        }).then(function (response) {

        }.bind(this))

    }

    onChangeEmailSignUp(e){
        // console.log("target is ",e);
        const user = this.state.register_user;
        // console.log(e.target.value);
        user.username = e.target.value;
        this.setState({
            register_user: user
        })
    }

    onChangePasswordSignUp(e) {
        const user = this.state.register_user;
        user.token = e.target.value;
        this.setState({
            register_user: user
        })
    }


        render(){
        return(
            //scss class for "login-container here since same layout as login"
            <div className = 'login-container'> {/* onSubmit={this.onSignupSubmit} */}
                <form className = 'login' >
                    <img src ={require('../asset/logo.png')}/>
                    <h1>Please complete your registration</h1>
                    <Divider horizontal inverted/>
                    <hr color = "white"/>
                    <br />
                    <Input size='large' placeholder = "Invite code form email" fluid  />
                    <br/>
                    <Input onChange={this.onChangeEmailSignUp} size='large' placeholder = "Email"  fluid />
                    <br/>
                    <Input size='large' placeholder = "FullName" fluid  />
                    <br />
                    <Input onChange={this.onChangePasswordSignUp} size='large' placeholder = "Password"  type = "password" fluid />
                    <br />
                    <Input size='large' placeholder = "Confirm password"  type = "password" fluid/>

                    <Divider horizontal />
                    <span className = "float-right">
                        <Link className = "margin-right-20" to='/'>Cancel</Link>
                        <Button className = "button">Accept</Button>
                    </span>
                </form>
                <div className="right-align">
                    <p className="build-id">v2.0.0-1</p>
                </div>
                <div className="footer-container">
                    <footer>
                        <div className="row">
                            <div className="col">
                                <p className="margin-right-20">© 2016-{(new Date().getFullYear())} Xaptum, Inc.  <a href="mailto:social@xaptum.com">Contact us.</a></p>
                            </div>
                        </div>

                    </footer>
                </div>

            </div>
        )
    }
}

export default Accept

