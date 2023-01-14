import React from 'react';
import './Message.css'

// IMPORTS
// import yoshi from '../assets/Yoshi.webp';

export default function Message(props){
    return(
        <div className="message-mainContainer">
            <img src={props.pfp} alt="" className="message-pfp"/>

            <div className="message-contentContainer">

                <div className="message-information">
                    <p className="bold">{props.name}</p>
                    <span>{props.timestamp}</span>
                </div>

                <div className="message-description">
                    <p>{props.description}</p>
                </div>

            </div>
        </div>
    );
}