import React from 'react'
import './ChatNodes.css'

//add these imports 
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import purpleNode from '../../assets/NODE purple.png'
import grayNode from '../../assets/NODE.png'
import voiceNode from '../../assets/voice chat.png'

// IMPORTS 
import yoshi from '../../assets/Yoshi.webp';
import gear from '../../assets/settings.png'
import settingsDark from '../../assets/settingsDark.png'

export default function ChatNodes(){
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS CODE HERE

    return(
        <div className="chatNodes-mainContainer" >
            <div>
                <div className="chatNodes-textNodesContainer">
                    <h3>TEXT NODES</h3>
                    <div className="chatNodes-textNode">        
                        <img src = {purpleNode}/>  {/*icon for in use text chat*/}
                        <p style={{color: "#FFF"}}>Casual-convo</p>
                    </div>

                    <div className="chatNodes-textNode">
                        <img src = {grayNode}/> {/*icon for unused text chat*/}
                        <p>Work-related</p>
                    </div>

                    <div className="chatNodes-textNode">
                        <img src = {grayNode}/> {/*icon for unused text chat*/}
                        <p>ideas</p>
                    </div>
                </div>

                <div className="chatNodes-voiceNodesContainer">
                    <h3>VOICE NODES</h3>
                    <div className="chatNodes-voiceNode">
                        <img src = {voiceNode}/> {/*icon for unused voice chat*/}
                        <p>meetings</p>
                    </div>

                    <div className="chatNodes-voiceNode">
                        <img src = {voiceNode}/> {/*icon for unused text chat*/}
                        <p>coding space</p>
                    </div>
                    
                </div>
            </div>

            <div className="chatNodes-profileContainer" id = {theme}>  {/*<------ MAKE SURE TO ADD "id = {theme}" here*/}
                <div className="chatNodes-profileInfo">
                    <img src={yoshi} alt="user profile"/>
                    <div className="chatNodes-profileName">
                        <h3>Kings</h3>
                        <span>@Kings</span>
                    </div>
                </div>

                <img src={gear} alt="settings" className="chatNodes-profileSettings"/>
            </div>
        </div>
    );
}