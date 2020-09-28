import React, { Component, useEffect, useState } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

// Images
import LoginImage from './images/LoginImage.jpg';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/dashboard');
            console.log('This will push to dashboard')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard') //Push user to home page
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData); //Don't need to handle redirect in props b/c it's handled in the component
        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="login grid">
            <img src={LoginImage} />
            <div className="login__content grid">
                <div className="login__contentButtons grid">
                    <button id="signIn">Sign In</button>
                    <Link to='/register'>
                        <button id="signUp">Sign Up</button>
                    </Link>
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
                                type="email" 
                                id="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                placeholder="Email" 
                                className = { classnames("", {
                                    invalid: errors.email || errors.emailnotfound
                                })}
                                />
                                <span className="errorText">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>

                                <input 
                                type="password" 
                                id="password"
                                onChange={this.onChange} 
                                value={this.state.password}
                                error={errors.email}
                                placeholder="Password" 
                                className = { classnames("", {
                                    invalid: errors.password || errors.passwordnotfound
                                })}
                                />
                                <span className="errorText">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>

                                <button type="submit">
                                    Login
                                </button>
                        </form>
                </div>
                <div className="spacer"></div>
            </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default withRouter(connect(
    mapStateToProps,
    { loginUser }
)(Login));