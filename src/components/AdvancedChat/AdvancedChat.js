import React from 'react';
import './AdvancedChat.css'

// IMPORTS
import yoshi from '../../assets/Yoshi.webp';
import giftIcon from '../../assets/gift.png';
import pictureIcon from '../../assets/picture.png';
import searchGlass from '../../assets/Search.png'

//ADD THESE IMPORTS

import { useContext } from 'react';
import { ThemeContext } from '../../App';
import upArrow from '../../assets/up arrow.png'
import messageIcon from '../../assets/dm icon.png'
import plusIcon from '../../assets/+ add.png'
import searchIcon from '../../assets/pink Search.png'

// COMPONENTS
// import ChatLog from './ChatLog';
import AdvancedChatLog from './AdvancedChatLog';
import ChatNodes from '../ChatNodes/ChatNodes';

// renders advanced chat for group DMs in DirectMessage page
//props expected: N/A
// TODO: everything
export default function AdvancedMode(props){
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS CODE HERE
    return(
        //main div
        <div className="advancedChat-mainContainer" id = {theme}>  {/*<------ MAKE SURE TO ADD "id = {theme}" here*/}

            {/* renders group chat icons */}
            <div className="advancedChat-groupContainer">
                <div className='messageIcon-container'>  {/*Message Icon container that is  in the group container*/}
                    <img src = {messageIcon}/>    
                </div> 
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>

                <div className="advancedChat-activeGroup" style={{borderBottom: '3px solid #dc03ff'}}>
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>
                </div>

                <div className='plusIcon-container'>  {/*Plus Icon container that is  in the group container*/}
                    <img src = {plusIcon}/>    
                </div> 

                <div className='searchIcon-container'>  {/*search Icon container that is  in the group container*/}
                    <img src = {searchIcon}/>    
                </div> 
            </div>

            {/* renders text input box for messaging*/}
            {/* TODO: implement style/functionality */}
            <div className="advancedChat-container">
                <ChatNodes />

                <div className="advancedChat-chat">
                    <AdvancedChatLog />
                    <div className="advancedChat-inputContainer">
                    
                        <img src={pictureIcon} alt=""/>
                        <img src={giftIcon} alt="" className="advancedChat-inputGift"/>
                        <input type="text" className="advancedChat-input"/>

                        <div className="advancedChat-menu">
                        <img src = {upArrow}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}