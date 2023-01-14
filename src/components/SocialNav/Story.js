import React from 'react';
import './SocialNav.css'

//renders storycard component
// props expected: img (user profile picture)
// TODO: add code to modify storycard background (currently can only be changed in App.css in "story-mainContainer" function)
export default function Story(props){
    return(
        <div className="story-mainContainer" style={{backgroundImage: `url(${props.story})`}}>
            <div>
                <img src={props.img} alt="user profile" className="story-userProfilePicture"/>
            </div>
        </div>
    );
}