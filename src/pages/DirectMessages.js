import React from 'react';

//ADD THESE IMPORTS TO YOUR FILE//
import { useContext } from 'react';
import { ThemeContext } from '../App';

//COMPONENTS
import ShortNavbar from '../components/ShortNavbar';
import Chat from '../components/Chat';
import AdvancedChat from '../components/AdvancedChat';
import DMList from '../components/DMList';
import NavBar from '../components/Navbar';



// main page for rendering direct message page
// TODO: get it working
export default function DirectMessages(){

    //state for handling normal and advanced chat
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS LINE TO YOUR CODE
    const [advancedMode, setAdvancedMode] = React.useState(false);
    
    return(
        <div>
            {advancedMode ? 
                <div className="DirectMessages" id ={theme}>{/* ADD "id = {theme}" in this spot here*/}
                <ShortNavbar />
                <AdvancedChat />
                <DMList />
            </div>
            :
                <div className="DirectMessages" id ={theme}>{/* ADD "id = {theme}" in this spot here*/}
                    <NavBar />
                    <Chat />
                    <DMList />
                </div>
            }
        </div>
    );
}