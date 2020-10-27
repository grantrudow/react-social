import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

// Images
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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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

        this.props.registerUser(newUser, this.props.history);

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
                                className = { classnames("", {
                                    invalid: errors.name
                                })}
                                />
                                <span className="errorText">{errors.name}</span>

                                <input 
                                type="email" 
                                id="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                placeholder="Email" 
                                className = { classnames("", {
                                    invalid: errors.email
                                })}
                                />
                                <span className="errorText">{errors.email}</span>

                                <input 
                                type="password" 
                                id="password"
                                onChange={this.onChange} 
                                value={this.state.password}
                                error={errors.email}
                                placeholder="Password" 
                                className = { classnames("", {
                                    invalid: errors.password
                                })}
                                />
                                <span className="errorText">{errors.password}</span>
                                

                                <input 
                                type="password" 
                                id="password2"
                                onChange={this.onChange} 
                                value={this.state.password2}
                                error={errors.password2}
                                placeholder="Confirm Password" 
                                className = { classnames("", {
                                    invalid: errors.password2
                                })}
                                />
                                <span className="errorText">{errors.password2}</span>

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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// Have to use withRouter in order to redirect within an action
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));