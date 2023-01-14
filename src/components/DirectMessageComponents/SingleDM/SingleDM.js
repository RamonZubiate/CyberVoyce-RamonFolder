import React from 'react';
import './SingleDM.css'

// IMPORTS
import yoshi from '../../../assets/Yoshi.webp'

// renders 1-on-1 DM in DMList component for Direct Messages page
//props expected: N/A
export default function SingleDM(props){
    return(
        // main div
        <div className="SingleDM-mainContainer" style={props.style}>

            {/* renders DM recipiant pfp */}
            <img src={props.pfp} alt=""/>

            {/* renders recipiant name and message status */}
            <div className="SingleDM-userNameContainer">
                <span className="bold">{props.name}</span>

                {props.isNew ? 
                    <p className="SingleDM-messageStatus" style={{color:"#b922fa"}}>{props.status}</p>
                :
                    <p className="SingleDM-messageStatus">{props.status}</p>
                }
            </div>
        </div>
    );
}