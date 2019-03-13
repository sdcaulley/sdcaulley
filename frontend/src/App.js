import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/register' component={ Register } />
                        <Route exact path='/login' component={ Login } />
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
