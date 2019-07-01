import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authentication';

class Dashboard extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <React.Fragment>
                <p>Hello Dashboard</p>
                <button onClick={this.onLogoutClick}>Log Out</button>
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
