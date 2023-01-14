import React from 'react'



export default function SettingsDisplayMedia() {
    return (
        <div>
            <div className='display-media-content-you-see'>
                <div className='media-content-you-see'>
                    <div>
                        <h2>Content You See</h2>
                    </div>
                    <div>
                        <p style={{ color: '#484848' }}>Manage what information you see and share on Cybervoyce</p>
                    </div>
                    <div>
                        <h2>Display media that contain sensetive content</h2>
                    </div>
                    <div>
                        <button className='display-media-disable-btn' type='button'>Disable</button>
                    </div>
                </div>
            </div>
            <div className='display-media-mute-and-block'>
                <div className='media-mute-and-block'>
                    <div>
                        <h2>Mute and Block Keywords</h2>
                    </div>
                    <div>
                        <p style={{ color: '#484848' }}>Manage what words you see on Cybervoyce</p>
                    </div>
                    <div>
                        <h2>Enter words to mute</h2>
                    </div>
                    <div>
                        <input className='display-media-mute-and-block-btn' type='text' placeholder='Enter Words'></input>
                    </div>
                </div>
            </div>
            <div className='display-media-your-voyce'>
                <div className='your-voyce'>
                    <div>
                        <h2>Your Voyce</h2>
                    </div>
                    <div>
                        <p style={{ color: '#484848' }}>Manage the content in your post.</p>
                    </div>
                    <div>
                        <h2>Mark content you post as sensitive</h2>
                    </div>
                    <div>
                        <button className='display-media-privacy-and-saftey-btn' type='button'>Enable</button>
                    </div>
                </div>
            </div>
            <div className='display-media-direct-messages'>
                <div className='privacy-direct-messages'>
                    <div>
                        <h2>Direct Messages</h2>
                    </div>
                    <div>
                        <p style={{ color: '#484848' }}>Manage who can message you directly</p>
                    </div>
                    <div>
                        <h3>Allow messages request from everyone</h3>
                    </div>
                    <div>
                        <button className='display-media-privacy-and-saftey-btn' type='button'>Disable</button>
                    </div>
                    <div>
                        <h3>Allow group invitations from everyone</h3>
                    </div>
                    <div>
                        <button className='display-media-direct-messages-btn' type='button'>Disable</button>
                    </div>
                </div>
            </div>
        </div>

    )
}