import React, { useEffect } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

// Images
import LoginImage from './images/LoginImage.jpg';

function Login() {
    const history = useHistory();
    const userLoggedIn = false;
    let signingUp = true;

    const isUserLoggedIn = () => {
        if(userLoggedIn) {
            console.log('we are rockin and rollin')
            history.push('/')
        } else {
            console.log('we need to sign you in')
        }
    }

    const onSignUp = () => {
        if (signingUp) {
            signingUp = false;
        } else {
            signingUp = true;
        }
        console.log(signingUp)
    }

    useEffect(() => {
        isUserLoggedIn();
    }, [])

    return (
        <div className="login grid">
            <img src={LoginImage} />
            <div className="login__content grid">
                <div className="login__contentButtons grid">
                    <button id="signIn">Sign In</button>
                    <button id="signUp" onClick={onSignUp}>Sign Up</button>
                </div>
                <div className="login__mainContent grid">
                    <div className="login__title">
                        <h4>welcome back</h4>
                        <h2>Log in to meet up with other devs</h2>
                    </div>
                    {signingUp == true ? 
                        <h1>Sign up here</h1>
                    :
                        <div className="login__fields grid">
                            <input id="email" type="email" placeholder="Email" />
                            <input id="password" type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </div>
                    }
                </div>
                <div className="spacer"></div>
            </div>
        </div>
    )
}

export default Login
