import React from 'react'
import {Outlet} from 'react-router-dom';

// COMPONENTS
import NavBar from './Navbar/Navbar'
// import SocialNavbar from './SocialNav';

//renders Navbar component for shared layout pages (refer to App.js)
//props expected: N/A
export default function SharedLayout(){
    return(
        <main className="Home">
            <NavBar />
            <Outlet />
        </main>
    );
}