import React from 'react'
import '../../pages/Register/Register.css'

// IMPORTS
import logo from '../../assets/cv ALPHA.png'

//renders navbar for Register page
//props expected: N/A
export default function NavBar(){
    return(
        <div className="RegisterNav">
            <img src={logo} alt="logo" className="RegisterLogo"/>

        </div>
    );
}