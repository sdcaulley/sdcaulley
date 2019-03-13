import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <a>
                    <div>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Register</a></li>
                            <li><a href='#'>Login</a></li>
                        </ul>
                    </div>
                </a>
            </nav>
        );
    }
}

export default Navbar;
