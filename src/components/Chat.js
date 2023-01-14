import React from 'react';

// IMPORTS
import yoshi from '../assets/Yoshi.webp'

// renders chat in Direct Messages page
//props expected: N/A (for now)
// TODO: create and render chat log
export default function Chat(){
    return(
        //main div
        <div className="chat-mainContainer">

            {/* renders group chat icons */}
            <div className="chat-groupContainer">
                <img src={yoshi} alt=""/>
                <img src={yoshi} alt=""/>
                <img src={yoshi} alt=""/>
                <img src={yoshi} alt=""/>
                <img src={yoshi} alt=""/>
            </div>

            {/* renders text input box for messaging*/}
            {/* TODO: implement style/functionality */}
            <div className="chat-container">
                <div className="chat-inputContainer">

                </div>
            </div>

        </div>
    );
}