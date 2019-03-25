import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li>
                    <Link to='/code'>Code</Link>
                </li>
                <li>
                    <Link to='/consciousness'>Consciouness</Link>
                </li>
                <li>
                    <Link to='/craft'>Craft</Link>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Home;
