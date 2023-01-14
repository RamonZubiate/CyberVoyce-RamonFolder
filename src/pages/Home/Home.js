import React from 'react'

// COMPONENTS
// import HomeNavbar from '../components/Navbar';
import SocialNav from '../../components/SocialNav/SocialNav'
import Feed from '../../components/Feed/NewFeed';
import { useContext } from 'react';
import { ThemeContext } from "../../App.js";
import './Home.css'

// main page for rendering home feed
export default function Home(props){
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <main className="Home" id = {theme}>
            <Feed/>
            <SocialNav />
        </main>
    )
}