import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './ShortNavbar.css'

// COMPONENTS
import ShortbarOption from './ShorbarOption';
import CreatePostModal from '../CreatePostModal/CreatePostModal';

// ICONS
import logo from '../../assets/cyber-eye.png'
import searchGlass from '../../assets/Search.png'
import bell from '../../assets/notifications.png'
import profile from '../../assets/profile.png'
import forums from '../../assets/forums.png'
import market from '../../assets/market.png'
import livestream from '../../assets/stream.png'
import analytics from '../../assets/analytics.png'
import gear from '../../assets/settings.png'
import help from '../../assets/info.png'

//Dark Icons
import searchGlassDark from '../../assets/searchDark.png'
import infoDark from '../../assets/infoDark.png'
import analyticsDark from '../../assets/analyticsDark.png'
import marketDark from '../../assets/marketDark.png'
import settingsDark from '../../assets/settingsDark.png'
import forumsDark from '../../assets/forumsDark.png'
import notificationDark from '../../assets/notificationDark.png'
import profileDark from '../../assets/profileDark.png'
import livestreamDark from '../../assets/livestreamDark.png'

import { ThemeContext } from '../../App';

// renders collapsed version of navigation bar
//props expected: N/A
export default function ShortNavbar(){
    const {theme, setTheme} = useContext(ThemeContext);

    //state for rendering create post modal
    const [postModal, setPostModal] = React.useState(false);
    const togglePostModal = () => {
        setPostModal(!postModal);
    }

    return(
        // main div
        <div className="shortbar-mainContainer" id = {theme}> {/* make sure this "id = {theme}" is here */}

            {/* renders CV logo */}
            <div>
                <Link to="home"><img src={logo} alt="logo" className="nav-icon"/></Link>
            </div>

            {/* renders navigation bar options */}
            {/* if the theme value is set to dark, return the original icons*/}
            {theme === 'dark' ? 
            <div className="shortbarOption-container">
                <ShortbarOption icon={searchGlass} alt="search icon"/>
                <ShortbarOption icon={bell} alt="bell icon"/>
                <ShortbarOption icon={profile} alt="profile icon" link="profile"/>
                <ShortbarOption icon={forums} alt="forum icon"/>
                <ShortbarOption icon={market} alt="market icon" link="cybermarket"/>
                <ShortbarOption icon={livestream} alt="livestream icon"/>
                <ShortbarOption icon={analytics} alt="analytics icon"/>
                <ShortbarOption icon={gear} alt="gear icon"/>
                <ShortbarOption icon={help} alt="help icon"/>

                <button className="ShortPostBtn" onClick={togglePostModal}>+</button>
            </div>
            : 
            <div className="shortbarOption-container"> {/*return the light theme icons if theme is light */}
            <ShortbarOption icon={searchGlassDark} alt="search icon"/>
            <ShortbarOption icon={notificationDark} alt="bell icon"/>
            <ShortbarOption icon={profileDark} alt="profile icon" link="profile"/>
            <ShortbarOption icon={forumsDark} alt="forum icon"/>
            <ShortbarOption icon={marketDark} alt="market icon" link="cybermarket"/>
            <ShortbarOption icon={livestreamDark} alt="livestream icon"/>
            <ShortbarOption icon={analyticsDark} alt="analytics icon"/>
            <ShortbarOption icon={settingsDark} alt="gear icon"/>
            <ShortbarOption icon={infoDark} alt="help icon"/>

            <button className="ShortPostBtn" onClick={togglePostModal}>+</button>
        </div>
            }

            {/* conditionally renders post modal based on "postModal" state */}
            {postModal && (
                <CreatePostModal togglePostModal={togglePostModal} />
            )}
        </div>
    );
}