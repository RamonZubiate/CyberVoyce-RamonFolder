import React from 'react'

// COMPONENTS
import Market from '../../components/MarketComponents/Market';
import SocialNav from '../../components/SocialNav/SocialNav';
import './Cybermarket.css'

// main page for rendering Cybermarket
export default function Cybermarket(){
    return(
        <main className="Home">
            <Market />
            <SocialNav />
        </main>
    );
}