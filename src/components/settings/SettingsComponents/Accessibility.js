import React, { useEffect } from 'react'
import ToggleButton from '../../buttons/ToggleButton'

//ADD THESE IMPORTS
import { useContext } from 'react';
import { ThemeContext } from '../../../App';


export default function Accessibility() {

    const {theme, setTheme} = useContext(ThemeContext); //useContext hook
    const[themeBool, setThemeBool] = React.useState(true); // useState hook with boolean variable that will be used to determine if light mode is set to true


    const toggleTheme = () => { //This toggles the theme value from dark to light and vice versa depending on the themeBool value
        if(themeBool === true) 
        {
            setTheme('light');
            document.body.style = 'background: white';     
        }
        else{
            setTheme('dark');
           document.body.style = 'background: #191919';       
        } 
       }

       const callback = value => { //This function is the callback function that is passed down to the 'ToggleButton' child and it stores 
        setThemeBool(value);       // the value that is returned by the 'ToggleButton' function
        toggleTheme();
       }


    return (
        <div>
            <div className="accessibility-header">
                <h2>Accessibility</h2>
                <p style={{ color: 'gray' }}>Change your Cybervoyce experience</p>
            </div>
            <div className='accessibility-lightmode'>
                <h3>Light Mode</h3>
                <div className='accessibility-lightmode-toggle-button'>
                    <ToggleButton callback = {callback}/> {/*Callback function is passed as prop here */}
                </div>
            </div>

        </div>
    )
}