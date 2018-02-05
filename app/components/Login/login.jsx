/*This is a login page.*/
import React, { Component } from 'react'
import { Divider,
         Input,
         Button } from 'semantic-ui-react'
import {
        Link
        } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'

/*Start login component*/
class Login extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            IsLoggedIn: false,
            login_user: {
                token: 'xaptumadmin',
                username: 'admin@xaptum'
            }
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

    }

    //keep track of user
    onChangeEmail(e) {
        // console.log(e);
        const user = this.state.login_user;
        user.email = e.target.value;
        // console.log(e.target.value);
        this.setState({
            login_user:user
        });
    }

    onChangePassword(e) {
        const user = this.state.login_user;
        user.password = e.target.value;
        // console.log(e.target.value);
        this.setState({
            login_user:user
        })
    }


    //helper function to authenticate the user
    onClick(){
        //set the header to 'application/json'
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.defaults.headers['Accept'] = 'application/json';
        axios.post('https://demo.xaptum.io/api/v2/xauth', {
                'username': this.state.login_user.username,
                'token': this.state.login_user.token
        } )
        .then(function(response){
            // console.log('response is', response);
            // console.log('state', this.state)
            this.setState({IsLoggedIn: true},
                function() {
                    // console.log("this.isloggedin",this.state);
                    this.props.history.push({pathname: '/dashboard', state: {IsLoggedIn:this.state.IsLoggedIn}})
                })
            ;
            // console.log("users is ",this.state.login_user);
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <div className = 'login-container'>
                <div className = 'login'>
                    <img className = "img" src ={require('../asset/logo.png')}/>
                    <h1>Login to Edge Network Fabric</h1>
                    {/*login form*/}
                    <form className = "input_form" >
                        <hr color = "white"/>
                        <br />
                        <Input size='big' placeholder = "Username" onChange={this.onChangeEmail} fluid/>
                        <br />
                        <Input size='big' placeholder = "Password" onChange={this.onChangePassword}  type = "password" fluid/>
                        <br />
                        <Link  to='/reset'>Forget password?</Link>
                        <br />
                     </form>
                    <Divider horizontal />
                    <span className = "float-right">
                        <Link className = "margin-right-20" to='/accept'>Accept an Invite</Link>
                        <Button onClick={this.onClick} className = "button">login</Button>
                    </span>


                </div>
                {/*footer*/}
                <div className="footer-container">
                    <footer>
                        <div className="row">
                            <div className="col">
                                <p className="copyright margin-right-20">© 2016-{(new Date().getFullYear())} Xaptum, Inc.  <a href="mailto:social@xaptum.com">Contact us.</a></p>
                            </div>
                            <div className="right-align">
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