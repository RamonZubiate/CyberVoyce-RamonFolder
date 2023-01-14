import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ThemeContext } from "../App.js";

// COMPONENTS
import NavbarOption from './NavbarOption';
import CreatePostModal from './CreatePostModal';
import ShortNavbar from './ShortNavbar';
import { Switch } from '@mui/material';

// ICONS
import logo from '../assets/cyber-eye.png'
import searchGlass from '../assets/Search.png'
// import searchGlass2 from '../assets/Search.svg'
import bell from '../assets/notifications.png'
import profile from '../assets/profile.png'
import forums from '../assets/forums.png'
import market from '../assets/market.png'
import livestream from '../assets/stream.png'
import analytics from '../assets/analytics.png'
import gear from '../assets/settings.png'
import help from '../assets/info.png'

//Dark Icons
import searchGlassDark from '../assets/searchDark.png'
import infoDark from '../assets/infoDark.png'
import analyticsDark from '../assets/analyticsDark.png'
import marketDark from '../assets/marketDark.png'
import settingsDark from '../assets/settingsDark.png'
import forumsDark from '../assets/forumsDark.png'
import notificationDark from '../assets/notificationDark.png'
import profileDark from '../assets/profileDark.png'
import livestreamDark from '../assets/livestreamDark.png'

//RAMON WORK

// renders main navigation bar
//props expected: N/A
//TODO: add state for highlighting current visiting page
export default function NavBar(){
    const {theme, setTheme} = useContext(ThemeContext);


    //state for rendering create post modal
    const [postModal, setPostModal] = React.useState(false);
    const togglePostModal = () => {
        setPostModal(!postModal);
    }

    //state for keeping track of window size for rendering navbar
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [windowWidth])

    const toggleTheme = () => {
    if(theme === 'dark')
    {
        setTheme('light');
        document.body.style = 'background: white';     
    }
    else{
        setTheme('dark');
       document.body.style = 'background: #191919';       
    } 
   
   } 

    return(

        <div>
            {windowWidth > 1300 ?
                (
                    // renders "normal" size navbar
                    <div className="main-container" id = {theme}>

                        {/* render CV logo and serves as Home page navigation button */}
                        <div>
                            <Link to="/home"><img src={logo} alt="logo" className="nav-icon"/></Link>
                        </div>
                        {/*switch to toggle theme mode*/}
                         <div className='theme-Switch-container'> 
                        <Switch onChange={toggleTheme}/>  
                        <h4 style={{position: 'relative', display: 'inline'}}>Switch Theme</h4>
                        </div>
                        {/* render Navigation bar options*/}
                        {theme === 'dark' ?
                        <div>
                            <NavbarOption icon={searchGlass} alt="search icon" option="Explore"/>
                            <NavbarOption icon={bell} alt="bell icon" option="Notifications"/>
                            <NavbarOption icon={profile} alt="profile icon" option="Profile" link="/profile"/>
                            <NavbarOption icon={forums} alt="forum icon" option="Forums"/>
                            <NavbarOption icon={market} alt="market icon" option="Cybermarket" link="/cybermarket"/>
                            <NavbarOption icon={livestream} alt="livestream icon" option="Livestream"/>
                            <NavbarOption icon={analytics} alt="analytics icon" option="Analytics"/>
                            <NavbarOption icon={gear} alt="gear icon" option="Settings"/>
                            <NavbarOption icon={help} alt="help icon" option="Help"/>

                            <button className="PostBtn" onClick={togglePostModal}>Post</button>
                        </div>
                        :           
                        <div>
                        <NavbarOption icon={searchGlassDark} alt="search icon" option="Explore"/>
                        <NavbarOption icon={notificationDark} alt="bell icon" option="Notifications"/>
                        <NavbarOption icon={profileDark} alt="profile icon" option="Profile" link="profile"/>
                        <NavbarOption icon={forumsDark} alt="forum icon" option="Forums"/>
                        <NavbarOption icon={marketDark} alt="market icon" option="Cybermarket" link="/cybermarket"/>
                        <NavbarOption icon={livestreamDark} alt="livestream icon" option="Livestream"/>
                        <NavbarOption icon={analyticsDark} alt="analytics icon" option="Analytics"/>
                        <NavbarOption icon={settingsDark} alt="gear icon" option="Settings"/>
                        <NavbarOption icon={infoDark} alt="help icon" option="Help"/>

                        <button className="PostBtn" onClick={togglePostModal}>Post</button>
                       
                        </div>
                          }
                        {postModal && (
                            <CreatePostModal togglePostModal={togglePostModal} />
                        )}

                    </div>
                )
                :
                (
                    // renders collapsed version of navigation bar
                    <div>
                        <ShortNavbar />
                    </div>
                )
            }
        </div>
    );
}