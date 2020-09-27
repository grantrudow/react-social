import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginImage from '../Login/images/LoginImage.jpg';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id] : e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="login grid">
            <img src={LoginImage} />
            <div className="login__content grid">
                <div className="login__contentButtons grid">
                    <Link to="/login">
                        <button id="signIn">Sign In</button>
                    </Link>
                    <button id="signUp">Sign Up</button>
                </div>
                <div className="login__mainContent grid">
                    <div className="login__title">
                        <h4>welcome back</h4>
                        <h2>Log in to meet up with other devs</h2>
                    </div>
                            <form 
                            noValidate 
                            onSubmit={this.onSubmit}
                            className="login__fields grid"
                            >
                                <input 
                                type="text" 
                                id="name"
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name} 
                                placeholder="Your Name" 
                                />
                                <input 
                                type="email" 
                                id="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                placeholder="Email" 
                                />
                                <input 
                                type="password" 
                                id="password"
                                onChange={this.onChange} 
                                value={this.state.password}
                                error={errors.email}
                                placeholder="Password" 
                                />
                                <input 
                                type="password" 
                                id="password2"
                                onChange={this.onChange} 
                                value={this.state.password2}
                                error={errors.password2}
                                placeholder="Confirm Password" 
                                />
                                <button type="submit">
                                    Register
                                </button>
                            </form>
                </div>
                <div className="spacer"></div>
            </div>
        </div>
        )
    }
}

export default Register;