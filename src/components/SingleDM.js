import React from 'react';

// IMPORTS
import yoshi from '../assets/Yoshi.webp'

// renders 1-on-1 DM in DMList component for Direct Messages page
//props expected: N/A
export default function SingleDM(){
    return(
        // main div
        <div className="SingleDM-mainContainer">

            {/* renders DM recipiant pfp */}
            <img src={yoshi} alt=""/>

            {/* renders recipiant name and message status */}
            <div className="SingleDM-userNameContainer">
                <span className="bold">Kings</span>
                <p className="SingleDM-messageStatus">Sent 3min ago</p>
            </div>
        </div>
    );
}