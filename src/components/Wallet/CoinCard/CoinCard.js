import React from 'react';
import './CoinCard.css'
// IMPORTS 
import SmallGraph from '../../../assets/SmallGraph.png'

// renders coin info card in "My Wallet" page
//props expected: img (image of coin), holding (amount owned), coin (name of coin), value (current USD value of coin)
// TODO: connect component to crypto wallet API
export default function CoinCard(props){
    return(
        <div className="CoinCard-mainContainer">

            {/* TODO: display real crypto coin information */}
            <div className="CoinCard-infoContainer">

                {/* coin image */}
                <img src={props.img} alt="crypto coin"/>

                {/* coin information */}
                <div className="CoinCard-amountContainer">
                    <p>{props.holding} <span className="bold">{props.coin}</span></p>
                    <span>${props.value}</span>
                </div>

            </div>

            {/* coin value performance graph */}
            {/* TODO: add real value performance graph */}
            <div className="CoinCard-graph">
                <img src={SmallGraph} alt="graph" className="CoinCard-graph"/>
            </div>
        </div>
    )
}