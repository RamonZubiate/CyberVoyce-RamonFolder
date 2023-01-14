import React from 'react'

// COMPONENTS
import UserProfile from '../../components/UserProfile/UserProfile';
import SocialNav from '../../components/SocialNav/SocialNav';
import './Profile.css'

// main page for rendering profile
export default function Profile(){
    return(
        <main className="Home">
            <UserProfile />
            <SocialNav />
        </main>
    );
}