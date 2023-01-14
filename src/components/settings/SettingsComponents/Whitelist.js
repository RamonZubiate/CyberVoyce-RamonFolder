import React from 'react'

import yoshi from '../../../assets/Yoshi.webp'


export default function Whitelist() {
    return (
        <div>
            <div>
                <div className='settings-whitelist-paragraph'>
                    <p style={{ color: '#484848' }}>see and manage users in the whitelist</p>
                </div>
                <div className='settings-whitelist-profile-container'>
                    <div className='settings-whitelist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-whitelist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='whitelist-button-poisiton'>
                           <button className='whitelist-button'  type='button'>Move</button>
                        <button className='whitelist-button' type='button'>Remove</button> 
                        </div>
                        
                    </div>
                </div>
                <div className='settings-whitelist-profile-container'>
                    <div className='settings-whitelist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-whitelist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='whitelist-button-poisiton'>
                           <button className='whitelist-button'  type='button'>Move</button>
                        <button className='whitelist-button' type='button'>Remove</button> 
                        </div>
                        
                    </div>
                </div>
                <div className='settings-whitelist-profile-container'>
                    <div className='settings-whitelist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-whitelist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='whitelist-button-poisiton'>
                           <button className='whitelist-button'  type='button'>Move</button>
                        <button className='whitelist-button' type='button'>Remove</button> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}