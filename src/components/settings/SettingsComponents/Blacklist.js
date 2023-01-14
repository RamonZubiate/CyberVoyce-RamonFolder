import React from 'react'

import yoshi from '../../../assets/Yoshi.webp'


export default function Blacklist() {
    return (
        <div>
            <div>
                <div className='settings-blacklist-paragraph'>
                    <p style={{ color: '#484848' }}>see and manage users in the blacklist</p>
                </div>
                <div className='settings-blacklist-profile-container'>
                    <div className='settings-blacklist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-blacklist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='blacklist-button-poisiton'>
                           <button className='blacklist-button'  type='button'>Move</button>
                        <button className='blacklist-button' type='button'>Remove</button> 
                        </div>
                        
                    </div>
                </div>
                <div className='settings-blacklist-profile-container'>
                    <div className='settings-blacklist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-blacklist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='blacklist-button-poisiton'>
                           <button className='blacklist-button'  type='button'>Move</button>
                        <button className='blacklist-button' type='button'>Remove</button> 
                        </div>
                        
                    </div>
                </div>
                <div className='settings-blacklist-profile-container'>
                    <div className='settings-blacklist-profiles'>
                        <div className='post-avatar'>
                            <img src={yoshi} alt="avatar" />
                        </div>
                        <div className='settings-blacklist-profile'>
                            <h5 style={{ color: 'gray' }}>@madeinheaven</h5>
                            <h4 style={{ color:'#d747fc'}}>0x024983938274x0</h4>
                        </div>
                        <div className='blacklist-button-poisiton'>
                           <button className='blacklist-button'  type='button'>Move</button>
                        <button className='blacklist-button' type='button'>Remove</button> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}