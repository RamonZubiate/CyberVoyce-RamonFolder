import React from 'react';

//COMPONENTS
import ShortNavbar from '../../components/ShortNavbar/ShortNavbar';
import Chat from '../../components/Chat/Chat';
import AdvancedChat from '../../components/AdvancedChat/AdvancedChat';
import DMList from '../../components/DirectMessageComponents/DMList';
import NavBar from '../../components/Navbar/Navbar';



// main page for rendering direct message page
// TODO: get it working
export default function DirectMessages(){

    //state for handling normal and advanced chat
    const [advancedMode, setAdvancedMode] = React.useState(false);

    const advancedModeTrue = () => {
        setAdvancedMode(true);
    }

    const advancedModeFalse = () => {
        setAdvancedMode(false);
    }
    
    return(
        <div>
            {advancedMode ? 
                <div className="DirectMessages">
                <ShortNavbar />
                <AdvancedChat toggleAdvanced={advancedModeTrue}/>
                <DMList toggleAdvanced={advancedModeFalse}/>
            </div>
            :
                <div className="Home">
                    <NavBar />
                    <Chat toggleAdvanced={advancedModeTrue}/>
                    <DMList toggleAdvanced={advancedModeFalse}/>
                </div>
            }
        </div>
    );
}