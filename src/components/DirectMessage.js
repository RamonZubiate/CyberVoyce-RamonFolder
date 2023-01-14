import React from 'react';
import {Link} from 'react-router-dom';

// renders direct messages in SocialNav component
//props expected: img (user profile), displayName (user display name), username (user username)
// TODO: create direct message page and add functionality to "Message" button
export default function DirectMessage(props){
    return(
        <Link to="/messages" className="directMessage-container" style={{textDecoration: 'none'}}>
            <div className="directMessage-user">

                {/* render user profile picture */}
                <img src={props.img} alt="user profile"/>

                {/* render user information */}
                <div className="directMessage-username">
                    <h4>{props.displayName}</h4>
                    <p>{`@${props.username}`}</p>
                </div>
            </div>

            <div className="directMessage-btn">
                <button>Message</button>
            </div>
            
        </Link>
    );
}