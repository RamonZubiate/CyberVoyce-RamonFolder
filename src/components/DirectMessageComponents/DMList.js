import React from 'react';
import '../../pages/DirectMessages/DirectMessages.css'

//COMPONENTS
import SingleDM from './SingleDM/SingleDM';

// IMPORTS
import searchIcon from '../../assets/Search.png'
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import searchDark from '../../assets/searchDark.png'

// renders list of Direct Messages in DirectMessage page
//props expected: N/A
// TODO: make the DM cards dynamic and displasy unique DM chats
export default function DMList(props){
    const {theme, setTheme} = useContext(ThemeContext);

    return(
        // main div
        <div className="DMList-mainContainer" id = {theme}> {/*<------ MAKE SURE TO ADD "id = {theme}" here*/}

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
                <div className="DMList-onlineUsers" onClick={props.toggleAdvanced}>
                    <h2>ONLINE</h2>
                    <SingleDM 
                        pfp="https://cdn1.epicgames.com/ue/product/Screenshot/Img1-1920x1080-2fe06385a4a96b6f28c3d24f9d283ef3.jpg?resize=1&w=1920" 
                        name="gamer" 
                        status="2 new messages" 
                        isNew="true" 
                        style={{borderLeft: '3px solid #dc03ff'}}
                    />
                    <SingleDM
                        pfp="https://steamuserimages-a.akamaihd.net/ugc/771740119957770765/02B62AF9FD54BE5A640E81102889651E38E62CDE/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" 
                        name="The Guy" 
                        status="read"
                    />
                    <SingleDM pfp="https://pyxis.nymag.com/v1/imgs/631/fbb/8c1703756d5ed53c4862c2928f331c6d5e-07-mac-miller-r.rsquare.w330.jpg" name="Mac Miller" status="sent 3 mins ago"/>
                </div>

                {/* container for offline DMs */}
                <div className="DMList-offlineUsers">
                    <h2>OFFLINE</h2>
                    <SingleDM pfp="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-28.jpg" name="Leo" status="sent now"/>
                    <SingleDM pfp="https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg" name="Apple man" status="sent 999yr ago"/>
                    <SingleDM pfp="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-28.jpg" name="Leo" status="sent now"/>
                    <SingleDM pfp="https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg" name="Apple man" status="sent 999yr ago"/>
                    <SingleDM pfp="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-28.jpg" name="Leo" status="sent now"/>
                    <SingleDM pfp="https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg" name="Apple man" status="sent 999yr ago"/>
                    <SingleDM pfp="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-28.jpg" name="Leo" status="sent now"/>
                    <SingleDM pfp="https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg" name="Apple man" status="sent 999yr ago"/>
                    <SingleDM pfp="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-28.jpg" name="Leo" status="sent now"/>
                    <SingleDM pfp="https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg" name="Apple man" status="sent 999yr ago"/>
                </div>

            </div>

        </div>
    );
}