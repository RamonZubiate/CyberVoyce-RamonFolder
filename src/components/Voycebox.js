import React, {useContext} from 'react';

// COMPONENTS
import VoyceboxOption from './VoyceboxOption';

// IMPORTS
import livevideo from '../assets/livevideo.png'
import photovideo from '../assets/camera.png'
import smile from '../assets/smile.png'
import yoshi from '../assets/Yoshi.webp'
import { ThemeContext } from '../App';


//renders Voyceboc component for feed component
//props expected: N/A
export default function Voycebox(){

  const {theme, setTheme} = useContext(ThemeContext);

    return(
        <div className="voycebox" id = {theme}>
            <form>
                <div className="voycebox-input">
                    {/* renders user profile picture */}
                    <img src={yoshi} alt="fat yoshi"/>

                    {/* renders text input box */}
                    <input placeholder="Voyce your thoughts" type="text"></input>
                </div>

                {/* renders Voycebox buttons */}
                <div className="voycebox-btns">
                    <VoyceboxOption icon={livevideo} alt="livevideo" option="Live Video"/>
                    <VoyceboxOption icon={photovideo} alt="photo/video" option="Photo/Video"/>
                    <VoyceboxOption icon={smile} alt="feeling/activity" option="Feeling/Activity"/>
                    <button className="voycebox-postbtn">Post</button>
                </div>
            </form>
        </div>
    );
}