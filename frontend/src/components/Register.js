import React, { Component } from 'react';
import SingleInput from './SingleInput';

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
        console.log(user);
    }

    render() {
        return (
            <div>
                <h2>Registration</h2>
                <form onSubmit={ this.handleSubmit }>
                    <SingleInput
                        type='text'
                        placeholder='Name'
                        name='name'
                        controlFunc={ this.handleInputChange }
                        content={ this.state.name } />
                    <SingleInput
                        type='email'
                        placeholder='Email'
                        name='email'
                        controlFunc={ this.handleInputChange }
                        content={ this.state.email} />
                    <SingleInput
                        type='password'
                        placeholder='Password'
                        name='password'
                        controlFunc={ this.handleInputChange }
                        content={ this.state.password} />
                    <SingleInput
                        type='password'
                        placeholder='Confirm Password'
                        name='password_confirm'
                        controlFunc={ this.handleInputChange }
                        content={ this.state.password_confirm} />
                    <button type='submit'>Register User</button>
                </form>
            </div>
        );
    }
}

export default Register;
