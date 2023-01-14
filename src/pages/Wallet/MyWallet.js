import React from 'react'
import './Wallet.css'

// COMPONENTS
import SocialNav from '../../components/SocialNav/SocialNav';
import Wallet from '../../components/Wallet/Wallet';

// main page for rendering Wallet
export default function MyWallet(){
    return(
        <main className="Home">
            <Wallet />
            <SocialNav />
        </main>
    );
}