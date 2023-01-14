import React from 'react';
import './Chat.css'

// IMPORTS
import yoshi from '../../assets/Yoshi.webp';
import giftIcon from '../../assets/gift.png';
import pictureIcon from '../../assets/picture.png';
import searchGlass from '../../assets/Search.png'

//ADD THESE IMPORTS HERE

import { useContext } from 'react';
import { ThemeContext } from '../../App';
import upArrow from '../../assets/up arrow.png'
import messageIcon from '../../assets/dm icon.png'
import plusIcon from '../../assets/+ add.png'
import searchIcon from '../../assets/pink Search.png'


// COMPONENTS
import ChatLog from './ChatLog';

// renders chat in Direct Messages page
//props expected: N/A (for now)
// TODO: create and render chat log
export default function Chat(props){
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS CODE HERE

    return(
        //main div
        <div className="chat-mainContainer" id = {theme}>  {/*<------ MAKE SURE TO ADD "id = {theme}" here*/}

            {/* renders group chat icons */}
            <div className="chat-groupContainer">
            <div className='messageIcon-container'>
                    <img src = {messageIcon}/>    {/*Message Icon container that is  in the group container*/}
                </div> 
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>

                <div className="advancedChat-activeGroup" style={{borderBottom: '3px solid #dc03ff'}}>
                <img src={yoshi} alt="" onClick={props.toggleAdvanced}/>
                </div>

                <div className='plusIcon-container'>  {/*Plus Icon container that is in the group container*/}
                    <img src = {plusIcon}/>    
                </div> 

                <div className='searchIcon-container'> {/*Search Icon container that is in the group container*/}
                    <img src = {searchIcon}/>    
                </div> 
            </div>

            {/* renders text input box for messaging*/}
            {/* TODO: implement style/functionality */}
            <div className="chat-container">
                <ChatLog />
            </div>
            <div className="chat-inputContainer">
                    
                    <img src={pictureIcon} alt=""/>
                    <img src={giftIcon} alt="" className="chat-inputGift"/>
                    <input type="text" className="chat-input"/>              
                    <div className="chat-menu">
                    <img src = {upArrow}/>
                    </div>
            </div>

        </div>
    );
}