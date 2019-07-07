import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import 'normalize.css';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Code from './components/code/code__front/code-front';
import Craft from './components/craft/craft__front/craft-front';
import Consciousness from './components/consciousness/consciousness__front/conscious-front';
import MyAuth from './components/mine/mine__auth/mine__auth';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/mine/mine__dashboard/Dashboard';

if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    setAuthToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/register' component={ Register } />
                        <Route exact path='/login' component={ Login } />
                        <Route exact path='/code' component={ Code } />
                        <Route exact path='/craft' component={ Craft } />
                        <Route exact path='/consciousness' component={ Consciousness } />
                        <Route exact path='/my-auth' component={ MyAuth } />
                        <Switch>
                            <PrivateRoute exact path='/dashboard' component= {Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
