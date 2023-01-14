import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.css'

// COMPONENTS
import Post from '../Posts/NewPost'
import { ThemeContext } from '../../App';
import ProfilePages from './ProfilePages';
// IMPORTS 
import img1 from '../../assets/elden kings.png'
import img2 from '../../assets/transformer.jpg'
import coverPhoto from '../../assets/cat.jpg'
import yoshi from '../../assets/Yoshi.webp'
import menuIcon from '../../assets/burgermenu.png'; {/* temporary */}



//renders user profile component
//props expected: N/A (for now)
export default function UserProfile(){
    const {theme, setTheme} = useContext(ThemeContext);

    const [showPage, setShowPage] = React.useState(1); //by default the number associated with "1" is the Posts page

    return(
        <div className="profile-container" id = {theme}>
            <div>

                {/* renders profile cover photo */}
                {/* <img src={coverPhoto} alt="user cover" className="profile-coverPhoto"/> */}
                <img src="https://img.freepik.com/premium-vector/space-background-with-abstract-shape-stars_189033-30.jpg?w=2000" alt="user cover" className="profile-coverPhoto"/>
                <div className="profile-user">
                    <div className="profile-header">
                        {/* TODO: implement user profile picture */}
                        <img src={yoshi} alt="avatar" className="profile-picture"/>

                        {/* renders profile stats (following/followers count and coins held) */}
                        <div className="profile-statsContainer">
                            <div className="stat">
                                <h1>1,200</h1>
                                <p>Followers</p>
                            </div>
                            <div className="stat">
                                <h1>215</h1>
                                <p>Following</p>
                            </div>
                            <div className="stat">
                                <h1>69.3K</h1>
                                <p>Coins</p>
                            </div>

                            {/* renders profile "hamburger" menu */}
                            <img src={menuIcon} alt="drop-down menu"/>
                        </div>
                    </div>

                    {/* renders profile biography */}
                    <div className="profile-biographyContainer">
                        <div className="profile-userName">
                            <h1>Kings</h1>
                        </div>

                        <div className="profile-biography">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    {/* renders "edit page" and "My wallet" buttons*/}
                    <div className="profile-btnContainer">
                        <Link to="" className="profile-btn">Edit profile</Link>
                        <Link to="/my-wallet" className="profile-btn">My wallet</Link>
                    </div>


                    {/* renders profile pages buttons for displaying user content */}
                    {/* TOODO: addf state for renderig different pages (default renders user posts) */}
                    <div className="profile-pages">
                        {/*sets the showPage state to its respective number ID upon click*/}
                        <div className="profile-pagesBtn" onClick={() => {setShowPage(1)}}> 
                            <h3>
                                Post
                            </h3>
                        </div>
                        <div className="profile-pagesBtn" onClick={() => {setShowPage(2)}}>
                        <h3>
                                Nft
                            </h3>
                        </div>
                        <div className="profile-pagesBtn" onClick={() => {setShowPage(3)}}>
                        <h3>
                                VOD
                            </h3>
                        </div>

                    </div>
                    <div>
                       <ProfilePages state = {showPage}/> {/*render profilepages depending on state prop value */}
                    </div>
                </div>
            </div>
        </div>
    );
}