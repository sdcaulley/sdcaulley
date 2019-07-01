import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authentication';

class Dashboard extends Component {
    constructor() {
        super();
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Dashboard</h1>
                <button onClick={this.onLogoutClick}>Log Out</button>
                <section>
                    Create:
                    <ul>
                        <li>Blog Post</li>
                        <li>Tag</li>
                        <li>Favorite</li>
                        <li>Project</li>
                        <li>Quote</li>
                    </ul>
                </section>
                <section>
                    Draft:
                    <ul>
                        <li>Blog Post</li>
                        <li>Favorite</li>
                        <li>Project</li>
                        <li>Quote</li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
};

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return ({
        auth: state.auth,
        errors: state.errors
    });
}

export default connect(mapStateToProps, { logoutUser })(Dashboard);
