import React, {useContext} from 'react'
import './SwapModal.css'

import { ThemeContext } from '../../../App'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// renders transaction modal for "My Wallet" page
//props expected: toggle (function that conditionally renders modal)
// TODO: connect component to crypto wallet API
export default function SwapModal(props){
    const {theme, setTheme} = useContext(ThemeContext);


    return(
        <div className="wallet-swapModal">
            <div className="wallet-swapModalOverlay">
                <div className="wallet-swapModalContainer" id = {theme}>
                    <div className="closeModal-btn" onClick={props.toggle}>
                    <ArrowBackIosNewIcon/>
                    </div>

                    <div className="swapModalContent">
                        <p className="swapModal-amount">$50</p>

                        <div className="swapModalTransaction">
                            {/* TODO: add coins for transaction */}
                        </div>

                        <buton className="previewTransaction-btn">Preview swap</buton>

                    </div>

                </div>

            </div>
        </div>
    )
}