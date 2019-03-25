import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authentication';
import SingleInput from '../SingleInput';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        this.props.registerUser(user);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <h2>Registration</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <SingleInput
                            title={'Name:'}
                            type={'text'}
                            placeholder={'Name'}
                            name={'name'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.name } />
                        {errors.name && (<div>{errors.name}</div>)}
                    </div>
                    <div>
                        <SingleInput
                            title={'Email:'}
                            type={'email'}
                            placeholder={'Email'}
                            name={'email'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.email} />
                        {errors.email && (<div>{errors.email}</div>)}
                    </div>
                    <div>
                        <SingleInput
                            title={'Password:'}
                            type={'password'}
                            placeholder={'Password'}
                            name={'password'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.password} />
                        {errors.password && (<div>{errors.password}</div>)}
                    </div>
                    <div>
                        <SingleInput
                            title={'Confirm Password:'}
                            type={'password'}
                            placeholder={'Confirm Password'}
                            name={'password_confirm'}
                            controlFunc={ this.handleInputChange }
                            content={ this.state.password_confirm} />
                        {errors.password_confirm && (<div>{errors.password_confirm}</div>)}
                    </div>
                    <button type='submit'>Register User</button>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    history: PropTypes.object,
    errors: PropTypes.object
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        errors: state.errors
    };
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
