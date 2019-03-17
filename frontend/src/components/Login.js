import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import SingleInput from './SingleInput';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <SingleInput
                            title={'Email:'}
                            type={'email'}
                            placeholder={'Email'}
                            name={'email'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.email } />
                        {errors.email && (<div>{errors.email}</div>)}
                    </div>
                    <div>
                        <SingleInput
                            title={'Password'}
                            type={'password'}
                            placeholder={'Password'}
                            name={'password'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.password } />
                        {errors.password && (<div>{errors.password}</div>)}
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    errors: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return ({
        errors: state.errors
    });
}

export default connect(mapStateToProps, { loginUser })(Login);
