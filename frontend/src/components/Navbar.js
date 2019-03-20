import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    onLogOut(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <ul>
                <a href='#' onClick={this.onLogOut.bind(this)}>Logout</a>
            </ul>
        );
        const guestLinks = (
            <ul>
                <li>
                    <Link to='/register'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login'>Sign In</Link>
                </li>
            </ul>
        );
        return (
            <nav>
                <Link to='/'>Redux Node Auth</Link>
                <div>
                    { isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object
};

function mapStateToProps(state) {
    return ({
        auth: state.auth
    });
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
