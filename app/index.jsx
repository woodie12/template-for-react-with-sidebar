import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Dashboard from './components/Dashboard/dashboard.jsx';
import Login from './components/Login/login.jsx';
import Reset from './components/Reset/reset.jsx';
import Accept from './components/Accept/accept.jsx'

render(
    <Router>
        <div>
            <Route exact path = "/" component = {Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path = "/reset" component = {Reset}/>
            <Route path = "/accept" component = {Accept}/>
        </div>
    </Router>,
    document.getElementById('app')
);