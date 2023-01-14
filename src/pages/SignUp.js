import React from 'react';
import {Link} from 'react-router-dom';
import cyberEye from '../assets/cyber-eye.png';

// main page for rendering "sign up"
export default function SignUp(){
    return(
        <main className="SignUpPage">
            <div className="SignUp-container">
                <div className="signUp-el">
                    <img
                        src={cyberEye}
                        alt="Cybervoyce logo"
                        className="SignUpLogo"
                    />

                    {/* button that directs users to register page */}
                    <Link to="/register" className="SignUpBtn">Sign up</Link>
                </div>
            </div>
        </main>
    );
}