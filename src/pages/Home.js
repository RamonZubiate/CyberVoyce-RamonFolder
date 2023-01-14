import React, {useContext} from 'react'

// COMPONENTS
// import HomeNavbar from '../components/Navbar';
import SocialNav from '../components/SocialNav'
import Feed from '../components/NewFeed';
import { ThemeContext } from '../App';


// main page for rendering home feed
export default function Home(){
    
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <main className="Home" id = {theme}> {/*RAMON WORK*/}
            <Feed/>
            <SocialNav />
        </main>
    )
}