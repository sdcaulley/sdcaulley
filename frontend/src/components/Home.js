import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <nav className='home-nav'>
                <ul className='home-nav__ul home-nav__ul_flex-container'>
                    <li className='home-nav__ul__li home-nav__ul__li_flex-item'>
                        <Link to='/code' className='home-nav__Link'>Code</Link>
                    </li>
                    <li className='home-nav__ul__li home-nav__ul__li_flex-item'>
                        <Link to='/consciousness' className='home-nav__Link'>Consciousness</Link>
                    </li>
                    <li className='home-nav__ul__li home-nav__ul__li_flex-item'>
                        <Link to='/craft' className='home-nav__Link'>Craft</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Home;
