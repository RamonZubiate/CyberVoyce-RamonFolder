import React from 'react'

// COMPONENTS
import SocialNav from '../components/SocialNav';
import Wallet from '../components/Wallet';

// main page for rendering Wallet
export default function MyWallet(){
    return(
        <main className="Home">
            <Wallet />
            <SocialNav />
        </main>
    );
}