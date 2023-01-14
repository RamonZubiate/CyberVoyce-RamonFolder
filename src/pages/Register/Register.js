import React from 'react'
import {Link} from 'react-router-dom'
import { create } from '@mui/material/styles/createTransitions';
import {motion} from "framer-motion";
import './Register.css'

// COMPONENTS
import NavBar from '../../components/RegisterComponents/RegisterNavBar'
import Switch from '../../components/RegisterComponents/RegisterSwitch'

// ICONS
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


export default function Register(){
    //State that renders Login/create account form
    const [createAcc, setCreateAcc] = React.useState(false)

    // switches between login/create account form
    function toggle(){
        setCreateAcc(prevBool => !prevBool);
    }

    //State that keeps track of user info
    const [userData, setUserData] = React.useState(
    {
        userName: "",
        email: "",
        logInInput: "",
        password: "", 
        confirmPassword: ""
    })
    console.log(userData)

    // function that saves user login information in local storage
    function handleChange(event)
    {
        const {name, value} = event.target
        setUserData(prevUserData => {
          return{
            ...prevUserData, 
            [name]: value
          }
        })
    }

    return(
        <div>
            <NavBar />
            <div className="RegisterContainer">
                <div className="reg-box">
                    <div className="switch-container">
                        <Switch createAcc={createAcc} toggle={toggle}/>
                    </div>

                    <div className="socialMedia-container">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="reg-socialIcon"><FacebookIcon /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="reg-socialIcon"><GoogleIcon /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="reg-socialIcon"><TwitterIcon /></a>
                    </div>

                    <div>                       
                          <motion.div 
                            animate = {{
                                x: !createAcc ? 0 : -400,
                                 }}
                            transition = {{
                                duration: .5
                                }}>
                                <div className="reg-form">
                                    <input 
                                        type="text" 
                                        placeholder="Username or email"
                                        onChange={handleChange}
                                        name="logInInput"
                                        value={userData.logInInput}
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                        value={userData.password}
                                    />

                                    <Link className="register-btn" to="/home">Log in</Link>
                                </div>
                            </motion.div>
                            <motion.div 
                            initial = {{
                                x: 400,
                                }} 
                            animate = {{
                                x: createAcc ? 0 : 400,                              
                            }}
                            transition = {{
                                duration: .5
                            }}>
                                <form className="reg-form-createAcc">
                                    <input 
                                        type="text" 
                                        placeholder="Username"
                                        onChange={handleChange}
                                        name="userName"
                                        value={userData.userName}
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        onChange={handleChange}
                                        name="email"
                                        value={userData.email}
                                        />
                                    <input 
                                        type="password" 
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                        value={userData.password}
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirm password"
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        value={userData.confirmPassword}
                                    />

                                    <Link className="register-btn" to="/home">Create account</Link>
                                </form>
                            </motion.div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}