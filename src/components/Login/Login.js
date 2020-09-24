import React from 'react';
import './Login.css';

// Images
import LoginImage from './images/LoginImage.jpg';

function Login() {
    return (
        <div className="login grid">
            <img src={LoginImage} />
            <div className="login__content grid">
                <div className="login__contentButtons grid">
                    <button id="signIn">Sign In</button>
                    <button id="signUp">Sign Up</button>
                </div>
                <div className="login__mainContent grid">
                    <div className="login__title">
                        <h4>welcome back</h4>
                        <h2>Login to meet up with other devs</h2>
                    </div>
                    <div className="login__fields grid">
                        <input id="email" type="email" placeholder="Email" />
                        <input id="password" type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
