import React, {useContext} from 'react'
import '../../pages/Wallet/Wallet.css'

import { ThemeContext } from '../../App'

// IMPORTS
import yoshi from '../../assets/Yoshi.webp'
import searchIcon from '../../assets/Search.png'
import bitcoin from '../../assets/bitcoin.png'
import dogecoin from '../../assets/dogecoin.png'
import litecoin from '../../assets/litecoin.png'
import uniswap from '../../assets/uniswap.png'
import voycecoin from '../../assets/VOYCE coin.png'

// COMPONENTS
import CoinCard from './CoinCard/CoinCard';
import SwapModal from './WalletModals/SwapModal';
import SendModal from './WalletModals/SendModal';

//renders wallet in "My Wallet" page
// props expected: N/A (for now)
export default function Wallet(){
    const {theme, setTheme} = useContext(ThemeContext);

    // State for rendering Swap modal
    const [swapModal, setSwapModal] = React.useState(false);
    const toggleSwapModal = () => {
        setSwapModal(!swapModal);
    }

    // State for rendering Send modal
    const [sendModal, setSendModal] = React.useState(false);
    const toggleSendModal = () => {
        setSendModal(!sendModal);
    }

    return(
        <div className="wallet-mainContainer" id = {theme}>
            <div className="wallet-header">
                <div className="wallet-headerContainer">
                    <div className="wallet-headerInfo">
                        <div className="wallet-headerProfile">
                            <img src={yoshi} alt="user profile"/>

                            {/* renders user information */}
                            <div className="wallet-headerName">
                                <h3>@Kings</h3>
                                <p>0xe3P9...88TJ</p>
                            </div>
                        </div>
                        
                        {/* renders user wallet value */}
                        <div className="wallet-headerMoney">
                            <p>$88,420.69</p>
                        </div>
                    </div>

                    {/* renders cryptocoin search bar */}
                    {/* TODO: add search functionality */}
                    <div className="header-coinSearch">
                        <img src={searchIcon} alt="search icon"/>
                        <input type="text" placeholder="Search cryptocurrency"></input>
                    </div>
                </div>
            </div>

            <div className="wallet-body">

                {/* renders transaction buttons */}
                {/* TODO: add functionality and transaction page */}
                <div className="wallet-transactionBtns" >
                    <button onClick={toggleSendModal}>Send</button>
                    <button onClick={toggleSwapModal}>Swap</button>
                </div>

                {swapModal && (
                        <SwapModal toggle={toggleSwapModal}/>
                    )}

                {sendModal && (
                        <SendModal toggle={toggleSendModal}/>
                    )}

                {/* renders tokens/nft menu */}
                {/* TODO: add functionality */}
                <div className="wallet-bodyMenu">
                    <div className="wallet-bodyMenuBtns">
                        <p>Tokens</p>
                    </div>
                    <div className="wallet-bodyMenuBtns">
                        <p>NFTs</p>
                    </div>
                </div>

                <div className="wallet-coinMainContainer">

                    {/* renders user-owned cryptocoin icons */}
                    <div className="wallet-coinContainer">
                        <img src={bitcoin} alt="crypto coin"/>
                        <img src={dogecoin} alt="crypto coin"/>
                        <img src={voycecoin} alt="crypto coin"/>
                        <img src={litecoin} alt="crypto coin"/>
                        <img src={uniswap} alt="crypto coin"/>
                    </div>

                    <div className="wallet-coinInfoContainer">

                        {/* renders cryptocoin value performance graph */}
                        <div className="wallet-coinInfoGraph">

                        </div>

                        {/* renders crypto CoinCards */}
                        <div className="wallet-coinInfoCardContainer">
                        <CoinCard img={voycecoin} holding="300" coin="VOYCE" value="1000.00"/>
                            <CoinCard img={bitcoin} holding="0.5" coin="BTC" value="800.00"/>
                            <CoinCard img={dogecoin} holding="1000" coin="DOGE" value="100.00"/>
                            <CoinCard img={litecoin} holding="2" coin="LITE" value="20.00"/>
                            <CoinCard img={uniswap} holding="5" coin="UNIS" value="1000.00"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}