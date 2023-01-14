import React from 'react';

//COMPONENTS
import SingleDM from './SingleDM';

// IMPORTS
import searchIcon from '../assets/Search.png'

//ADD THESE IMPORTS
import { useContext } from 'react';
import { ThemeContext } from '../App';
import searchDark from '../assets/searchDark.png'

// renders list of Direct Messages in DirectMessage page
//props expected: N/A
// TODO: make the DM cards dynamic and displasy unique DM chats
export default function DMList(){
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS LINE OF CODE
    return(
        // main div
        <div className="DMList-mainContainer">

            {/* renders search box */}
            <div className="DMList-searchBox">
                {theme === 'dark' ?
                <img src={searchIcon} alt="search icon"/>
                :
                <img src={searchDark} alt="search icon"/>
                }
                <input type="text" placeholder="Search users/groups"></input>
            </div>

            {/* main container for list of DMs */}
            {/* TODO: make the DM cards/chats dynamic */}
            <div className="DMList-usersContainer">

                {/* container for online DMs */}
                <div className="DMList-onlineUsers">
                    <h2>ONLINE</h2>
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                </div>

                {/* container for offline DMs */}
                <div className="DMList-offlineUsers">
                    <h2>OFFLINE</h2>
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                    <SingleDM />
                </div>

            </div>

        </div>
    );
}