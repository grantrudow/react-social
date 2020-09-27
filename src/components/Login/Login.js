import React, { Component, useEffect, useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';

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

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
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

export default Login;

// function Login() {
//     const history = useHistory();
//     const [signingUp, setSigningUp] = useState(true);
//     const [email, setEmail] = useState();
//     const [name, setName] = useState();
//     const [password, setPassword] = useState();
//     const [confirmPassword, setConfirmPassword] = useState();

//     const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

//     const onSignUp = () => {
//         if (signingUp) {
//             setSigningUp(false)
//         } else {
//             setSigningUp(true)
//         }
//         console.log(signingUp)
//     }

//     const registerUser = async (firstName, lastName, email) => {
//         if (name && email && password && confirmPassword) {
//             if (password === confirmPassword) {
//                 if (strongRegex.test(password)) {
//                     console.log('strong password')
                    
//                     const response = await axios({
//                         method: 'post',
//                         url: `/signup`,
//                         data: {
//                             firstName: firstName,
//                             lastName: lastName,
//                             email: email
//                         }
//                     });
//                 } else if (mediumRegex.test(password)) {
//                     console.log('medium password')

//                     const response = await axios({
//                         method: 'post',
//                         url: `/signup`,
//                         data: {
//                             firstName: firstName,
//                             lastName: lastName,
//                             email: email
//                         }
//                     });
//                 } else {
//                     console.log("Password isn't strong enough")
//                 }
//             } else {
//                 console.log('passwords do not match')
//             }
//         } else {
//             console.log('Please fill out all fields')
//         }
//     }

//     const onRegister = () => {
//         let firstName = name.split(' ').slice(0, -1). join(' ');
//         let lastName = name.split(' ').slice(-1).join(' ');
//         registerUser(firstName, lastName, email);
//     }

//     const onNameChange = (event) => {
//         setName(event.target.value)
//     }
//     const onEmailChange = (event) => {
//         setEmail(event.target.value)
//     }
//     const onPassChange = (event) => {
//         setPassword(event.target.value)
//     }
//     const onConfirmPassChange = (event) => {
//         setConfirmPassword(event.target.value)
//     }

//     useEffect(() => {

//     }, [])

//     return (
//         <div className="login grid">
//             <img src={LoginImage} />
//             <div className="login__content grid">
//                 <div className="login__contentButtons grid">
//                     <button id="signIn" onClick={onSignUp}>Sign In</button>
//                     <button id="signUp" onClick={onSignUp}>Sign Up</button>
//                 </div>
//                 <div className="login__mainContent grid">
//                     <div className="login__title">
//                         <h4>welcome back</h4>
//                         <h2>Log in to meet up with other devs</h2>
//                     </div>
//                     {signingUp == true ? 
//                         <div className="login__fields grid">
//                             <input type="name" onChange={onNameChange} placeholder="Full Name" />
//                             <input type="email" onChange={onEmailChange} placeholder="Email" />
//                             <input type="password" onChange={onPassChange} placeholder="Password" />
//                             <input type="password" onChange={onConfirmPassChange} placeholder="Confirm Password" />
//                             <button type="submit" onClick={onRegister}>Register</button>
//                         </div>
//                     :
//                         <div className="login__fields grid">
//                             <input id="email" type="email" placeholder="Email" />
//                             <input id="password" type="password" placeholder="Password" />
//                             <button type="submit">Login</button>
//                         </div>
//                     }
//                 </div>
//                 <div className="spacer"></div>
//             </div>
//         </div>
//     )
// }

// export default Login;
