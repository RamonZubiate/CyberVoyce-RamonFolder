import React from 'react';
import {Link} from 'react-router-dom';
import './ShortNavbar.css'

// renders collapsed navigation bar option in ShortNavbar component
//props expected: link (directs user to option page on click), icon (option display icon), alt (alt text for screen readers)
export default function ShortbarOption(props){
    return(
        <Link to={props.link} className="shortOption-btn">
            <img src={props.icon} alt={props.alt} className="shortOption-icon"/>
        </Link>
    );
}