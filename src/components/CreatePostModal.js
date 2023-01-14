import React, {useContext} from 'react';

// COMPONENTS
import CreateNFTModal from './CreateNFTModal';

// IMPORTS
import yoshi from '../assets/Yoshi.webp';
import nft1 from '../assets/NFT1.png'
import pictureIcon from '../assets/picture.png';

//ADD THESE IMPORTS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ThemeContext } from "../App.js";

export default function CreatePostModal(props){

    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS LINE OF CODE

    //state for rendering Create NFT modal
    const [createNFTModal, setCreateNFTModal] = React.useState(false);
    const toggleCreateNFTModal = () => {
        setCreateNFTModal(!createNFTModal);
    }

    return(
        // main div
        <div>
            {!createNFTModal ? 
                <div> 
                    <div className="postModal">
                        <div className="postModal-overlay">
                            <div className="postModal-container" id = {theme}> {/*id = {theme} goes here*/}

                                <div className="postModal-content">

                                    <div className="postModal-inputContainer">

                                        {/* renders back arrow button for closing modal */}
                                        <div className="postModal-closeBtn" onClick={props.togglePostModal}>
                                            <ArrowBackIosNewIcon/> {/*back arrow icon*/}
                                        </div>

                                        {/* renders user pfp and description input for post */}
                                        <div className="postModal-inputBox">
                                            <img src={yoshi} alt="user profile" className="postModal-userPfp"/>
                                            <input type="text" placeholder="Add a caption..."/>
                                        </div>
                                    </div>

                                    {/* renders NFT and post nft options */}
                                    {/* TODO: make the NFTs dynamic */}
                                    <div className="postModal-imgInput">
                                        <img src={nft1} alt=""/>
                                        <div className="postModal-pictures">
                                            <img src={pictureIcon} alt="" className="postModal-imgIcon"/>
                                            <img src={nft1} alt="" className="postModal-nft"/>
                                            <img src={nft1} alt="" className="postModal-nft"/>
                                        </div>
                                    </div>

                                    {/* renders post tag buttons */}
                                    {/* TODO: give functionality */}
                                    <div className="postModal-tagContainer">

                                        <div className="postModal-tag">
                                            <p><span className="postModal-tagPlus">+</span> Tag someone</p>
                                        </div>

                                        <div className="postModal-tag">
                                            <p><span className="postModal-tagPlus">+</span> Tag someone</p>
                                        </div>

                                    </div>

                                    {/* renders modal buttons */}
                                    <div className="postModal-btnContainer">
                                        <button className="postModal-NFTBtn" onClick={toggleCreateNFTModal}>Post as NFT</button>
                                        <button className="postModal-postBtn">Post</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            :
                <div> 
                    {/* conditionally renders Create NFT modal */}
                    <CreateNFTModal togglePostModal={props.togglePostModal} toggleCreateNFTModal={toggleCreateNFTModal}/>
                </div>
            }
        </div>
    );
}