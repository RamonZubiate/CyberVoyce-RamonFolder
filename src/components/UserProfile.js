import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

// COMPONENTS
import Post from './NewPost'
import { ThemeContext } from '../App';
// IMPORTS 
import img1 from '../assets/elden kings.png'
import img2 from '../assets/transformer.jpg'
import coverPhoto from '../assets/cat.jpg'
import yoshi from '../assets/Yoshi.webp'
import menuIcon from '../assets/burgermenu.png'; {/* temporary */}


//renders user profile component
//props expected: N/A (for now)
export default function UserProfile(){
    //Setting the state for post nft and vod so that way you can show each one by itself
    const [showPost, setShowPost] = React.useState(true);
    const [showNft, setShowNft] = React.useState(false);
    const [showVod, setShowVod] = React.useState(false);
    const {theme, setTheme} = useContext(ThemeContext);

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
                        {/* Setting each either post nft vod to true and the other ones to false depending on which one you click so that way only one can show when
                        you use a conditional later because you will say if true show this  */}
                        <div className="profile-pagesBtn">
                            <h3 onClick={() => { setShowPost(true); setShowNft(false); setShowVod(false) }}>
                                Post
                            </h3>
                        </div>
                        <div className="profile-pagesBtn">
                            <h3 onClick={() => { setShowNft(true); setShowPost(false); setShowVod(false) }}>
                                Nft
                            </h3>
                        </div>
                        <div className="profile-pagesBtn">
                            <h3 onClick={() => { setShowVod(true); setShowNft(false); setShowPost(false) }}>
                                VOD
                            </h3>
                        </div>

                    </div>
                    <div>
                        {/* Each one has a condition basically saying is show___ is true show this  */}
                        <div style={{ display: showPost ? 'block' : 'none' }}>
                        {/* This is where everything goes that is post related */}
                            <Post description="Good morning, Cybervoyce!." />
                            <Post description="Hold up.. The new Need for Speed looks pretty aight 👀" />
                            <Post description="Chainsaw man is GOATED" gift={true} />
                            <Post description='New transformer just droped' img={img2} />
                        </div>
                        <div style={{ display: showNft ? 'block' : 'none' }}>
                        {/* Everything NFT related will go here */}
                        <Post description='Introducing the NFT transformer' img={img2} />
                         
                        </div>
                        <div style={{ display: showVod ? 'block' : 'none' }}>
                        {/* Everything vod related will go here */}
                            this is the vod section
                            <p>saekflnksajndflkjsdalk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}