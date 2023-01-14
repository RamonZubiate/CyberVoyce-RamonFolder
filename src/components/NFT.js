import React, {useContext} from 'react';
import { ThemeContext } from '../App.js';

// renders NFTs for Cybermarket page
//props expected: img (image of NFT), creator (creator of NFT), price (numerical cost of NFT), coin (coin required for purchase)
export default function NFT(props){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className="NFT-mainContainer" id = {theme}>
            <img src={props.img} alt="nft"/>
            { props.img &&
                <div className="NFT-overlay">
                <p className="NFT-creator">@{props.creator}</p>
                <p className="NFT-price">{props.price} <span className="bold">{props.coin}</span></p>
            </div>
            }
        </div>
    );
}