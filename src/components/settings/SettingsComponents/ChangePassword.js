import React from 'react'





export default function SettingsChangePassword() {
    return (
        <div>
            {/* This is going to be the old new and confirm password and well as the last one being the save button */}
            <div className='change-password'>
                <input className='account-setting-change-password' type='text' placeholder='Old Password'></input>
                <input className='account-setting-change-password' type='text' placeholder='New Password'></input>
                <input className='account-setting-change-password' type='text' placeholder='Confirm Password'></input>
                <button className='account-setting-save-password' type='button'>Save</button>
            </div>
            
        </div>
    )
}