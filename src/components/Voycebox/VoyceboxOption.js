import React from 'react'
import './Voycebox.css'

//renders VoyceboxOption for Voycebox component
// props expected: icon (img that visually represents the option), alt (accessibility text for screen readers), option (option name)
export default function VoyceboxOption(props){
    return(
        <div className="voyceboxOption-container">
            <img src={props.icon} alt={props.alt} className="voyceboxOption-icon"/>
            <h4 className="voyceboxOption-text">{props.option}</h4>
        </div>
    );
}