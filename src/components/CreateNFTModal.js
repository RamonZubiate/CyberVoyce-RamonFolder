import React from 'react';


// IMPORTS
import nft1 from '../assets/NFT1.png'

//ADD THESE IMPORTS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ThemeContext } from '../App';
import { useContext } from 'react';

// renders create NFT modal for posting
//props expected: togglePostModal (function that conditionally renders modal based on state)
// TODO: connect component to crypto wallet API
export default function CreateNFTModal(props){
    const {theme, setTheme} = useContext(ThemeContext); //ADD THIS LINE OF CODE 
    return(
        //main div
        <div className="postModal">
                        <div className="createNFTModal-overlay">
                            <div className="createNFTModal-container" id = {theme}> {/* id = {theme} goes here */}

                                <div className="createNFTModal-content">
                                    <div className="createNFTModal-NFTContainer">

                                        {/* renders back button for leaving modal */}
                                        <div className="postModal-closeBtn" onClick={props.togglePostModal}>
                                               <ArrowBackIosNewIcon/> {/* back arrow icon goes here */}
                                        </div>

                                        {/* renders NFT and name input box */}
                                        <div className="createNFTModal-NFT">
                                            <img src={nft1} alt="nft"/>
                                            <input type="text" placeholder="Name..." className="createNFTModal-NFTName"/>
                                        </div>

                                    </div>

                                    {/* main div for rendering NFT post inputs */}   
                                    <div className="createNFTModal-NFTInput">
                                        <div className="createNFTModal-NFTInputContainer">

                                            {/* renders description box for NFT */}
                                            <textarea placeholder="Description..." maxlength="150" className="createNFTModal-NFTDescription"/>

                                            {/* renders rarity input for NFT */}
                                            <div className="createNFTModal-NFTRarity">

                                                <p>Rarity</p>
                                                <div className="createNFTModal-NFTRarityCount">
                                                    <input type="text" className="createNFTModal-NFTRarityCountInput" placeholder="1"/>
                                                    <p>out of</p>
                                                    <input type="text" className="createNFTModal-NFTRarityCountInput" placeholder="10"/>
                                                </div>

                                            </div>

                                            {/* renders loot input for NFT */}
                                            <div className="createNFTModal-NFTLoot">

                                                <p>Loot</p>
                                                <input type="text" className="createNFTModal-NFTLootInput" placeholder="Add loot"/>

                                            </div>


                                            {/* renders sell options for NFT */}
                                            <div className="createNFTModal-NFTSell">

                                                <div className="createNFTModal-NFTSellBtn">
                                                    <p>Set price</p>
                                                    <span>Sell at the set price.</span>
                                                </div>
                                                <div className="createNFTModal-NFTSellBtn">
                                                    <p>Highest bid</p>
                                                    <span>Sell at the highest bid.</span>
                                                </div>

                                            </div>

                                            {/* renders price input for NFT */}
                                            <div className="createNFTModal-NFTPrice">

                                                <p>Price</p>
                                                <input type="text" className="createNFTModal-NFTPriceInput" placeholder="50 VOYCE"/>

                                            </div>
                                        </div>

                                        {/* renders sell button */}
                                        <div className="createNFTModal-sellBtn">
                                            <button>Sell</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
    );
}