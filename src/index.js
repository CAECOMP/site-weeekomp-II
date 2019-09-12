import React from 'react';
import ReactDOM from 'react-dom';

import {Route, BrowserRouter as Router} from 'react-router-dom'

import Home from './screens/home/home'
import Store from './screens/store/store'
import Profile from './screens/profile/profile';
import Monday from './screens/events/monday';
import Tuesday from './screens/events/tuesday';
import Wednesday from './screens/events/wednesday';
import Thursday from './screens/events/thursday';
import Friday from './screens/events/friday';
import CreateAccount from './screens/CreateAccount/CreateAccount';
import Login from './screens/Login/Login'

import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/loja/" component={Store}/>
            <Route path="/evento/segunda" component={Monday}/>
            <Route path="/evento/terca" component={Tuesday}/>
            <Route path="/evento/quarta" component={Wednesday}/>
            <Route path="/evento/quinta" component={Thursday}/>
            <Route path="/evento/sexta" component={Friday}/>
            <Route path="/perfil/" component={Profile}/>
            <Route path="/cadastro/" component={CreateAccount}/>
            <Route path="/login/" component={Login}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
