import React from 'react';
import {Link} from 'react-router-dom';


// renders navigation bar option in Navbar component
//props expected: link (directs user to option page on click), icon (option display icon), alt (alt text for screen readers), option (option name)
export default function SidebarOption(props){
    return(
        <Link to={props.link} className="option-btn">
            <img src={props.icon} alt={props.alt} className="option-icon"/>
            <h2>{props.option}</h2>
        </Link>
    );
}