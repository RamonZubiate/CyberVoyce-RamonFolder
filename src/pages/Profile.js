import React from 'react'

// COMPONENTS
import UserProfile from '../components/UserProfile';
import SocialNav from '../components/SocialNav';

// main page for rendering profile
export default function Profile(){
    return(
        <main className="Home">
            <UserProfile />
            <SocialNav />
        </main>
    );
}