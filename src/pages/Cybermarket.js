import React from 'react'

// COMPONENTS
import Market from '../components/Market';
import SocialNav from '../components/SocialNav';


// main page for rendering Cybermarket
export default function Cybermarket(){
    return(
        <main className="Home">
            <Market />
            <SocialNav />
        </main>
    );
}