import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage =() => {

        return(
            <div className="login-page">
                <div className="login-field">
                    <div className="title-field">
                        <div className="title">Login Form</div>
                    </div>
                    <div className="form-container">
                        <div className="form-field">
                            <form className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field" >
                                <input type="submit" className="login-button" value="Login" />
                            </div>
                            </form>
                            <div className="signup-link">Not a member? <NavLink to="/signup" className="redirect-link">Signup here...</NavLink> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default LoginPage