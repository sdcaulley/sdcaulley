import React, { Component } from 'react';
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

        console.log(user);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={ this.handleSubmit }>
                    <SingleInput
                        title={'Email:'}
                        type={'email'}
                        placeholder={'Email'}
                        name={'email'}
                        controlFunc={ this.handleInputChange }
                        content={ this.state.email } />
                    <SingleInput
                        title={'Password'}
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        controlFunc={ this.handleInputChange }
                        content={ this.state.password } />
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
