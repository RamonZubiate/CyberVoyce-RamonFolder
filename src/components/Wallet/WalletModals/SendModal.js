import React, {useContext} from 'react'
import './SendModal.css'

import { ThemeContext } from '../../../App'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// renders transaction modal for "My Wallet" page
//props expected: toggle (function that conditionally renders modal)
// TODO: connect component to crypto wallet API
export default function SendModal(props){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div className="wallet-sendModal">
            <div className="wallet-sendModalOverlay">
                <div className="wallet-sendModalContainer"  id = {theme}>

                    {/* renders back arrow for closing modal */}
                    <div className="closeModal-btn" onClick={props.toggle}>
                        <ArrowBackIosNewIcon/>
                    </div>

                    <div className="sendModalContent">
                        <p className="sendModal-amount">2</p>

                        <div className="sendModalTransaction">
                            {/* TODO: add coins for transaction */}
                        </div>

                        <buton className="previewTransaction-btn">Preview transaction</buton>

                    </div>
                </div>
            </div>
        </div>
    )
}