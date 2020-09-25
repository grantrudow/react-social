import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';

// Images
import LoginImage from './images/LoginImage.jpg';

function Login() {
    const history = useHistory();
    const [signingUp, setSigningUp] = useState(true);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const onSignUp = () => {
        if (signingUp) {
            setSigningUp(false)
        } else {
            setSigningUp(true)
        }
        console.log(signingUp)
    }

    const registerUser = async (firstName, lastName, email) => {
        const response = await axios({
            method: 'post',
            url: `/signup`,
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        });
    }

    const onRegister = () => {
        console.log('Lets register this dawg')

        let firstName = name.split(' ').slice(0, -1). join(' ');
        let lastName = name.split(' ').slice(-1).join(' ');

        registerUser(firstName, lastName, email);
    }

    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPassChange = (event) => {
        setPassword(event.target.value)
    }
    const onConfirmPassChange = (event) => {
        setConfirmPassword(event.target.value)
    }

    useEffect(() => {

    }, [])

    return (
        <div className="login grid">
            <img src={LoginImage} />
            <div className="login__content grid">
                <div className="login__contentButtons grid">
                    <button id="signIn" onClick={onSignUp}>Sign In</button>
                    <button id="signUp" onClick={onSignUp}>Sign Up</button>
                </div>
                <div className="login__mainContent grid">
                    <div className="login__title">
                        <h4>welcome back</h4>
                        <h2>Log in to meet up with other devs</h2>
                    </div>
                    {signingUp == true ? 
                        <div className="login__fields grid">
                            <input id="name" type="name" onChange={onNameChange} placeholder="Full Name" />
                            <input id="email" type="email" onChange={onEmailChange} placeholder="Email" />
                            <input id="password" type="password" onChange={onPassChange} placeholder="Password" />
                            <input id="password" type="password" onChange={onConfirmPassChange} placeholder="Confirm Password" />
                            <button type="submit" onClick={onRegister}>Register</button>
                        </div>
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

export default Login;
