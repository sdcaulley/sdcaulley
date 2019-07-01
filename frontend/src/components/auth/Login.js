import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import SingleInput from '../form-elements/SingleInput';
import './Login.css';

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
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className='login__container'>
                <h2 className='login__h2'>Login</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div className='login__form'>
                        <div className='login__single-input'>
                            <SingleInput
                                title={'Email:'}
                                type={'email'}
                                placeholder={'Email'}
                                name={'email'}
                                controlFunc={ this.handleInputChange }
                                content={ this.state.email } />
                            {errors.email && (<div>{errors.email}</div>)}
                        </div>
                        <div className='login__single-input'>
                            <SingleInput
                                title={'Password:'}
                                type={'password'}
                                placeholder={'Password'}
                                name={'password'}
                                controlFunc={ this.handleInputChange }
                                content={ this.state.password } />
                            {errors.password && (<div>{errors.password}</div>)}
                        </div>
                        <button type='submit' className='login__button'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
};

Login.propTypes = {
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object,
    loginUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return ({
        auth: state.auth,
        errors: state.errors
    });
}

export default connect(mapStateToProps, { loginUser })(Login);
