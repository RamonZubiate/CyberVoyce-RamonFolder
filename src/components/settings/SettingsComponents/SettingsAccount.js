import React, { useState } from 'react'

//imports 
import SettingsAccountInformation from './AccountInformation'
import SettingsChangePassword from './ChangePassword'
import SettingsAccountPurchaseHistory from './PurchaseHistory'
import Whitelist from './Whitelist'
import Blacklist from './Blacklist'

export default function SettingsAccount() {
    const [activeSection, setActiveSection] = useState('base')


    const changeActiveSection = section => {
        setActiveSection(section)
    }


    return (
        <div>
            <div style={{ display: activeSection === 'base' ? 'block' : 'none' }}>
                <div>
                    <h2 className='settings-content-tabs'>Your Account</h2>
                </div>
                <div>
                    <p className='your-account-description' style={{ color: '#484848' }}>See information about your account, change your password, or learn about your account deactivation options</p>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('accountInformation')}>Account Information</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('changePassword')}>Change your Password</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick={() => changeActiveSection('purchaseHistory')}>Purchase history</h2>
                </div>
                <div className='settings-content-tabs'>
                    <h2 onClick ={() =>changeActiveSection('whitelist')}>Whitelist</h2>
                </div>
                <div className = 'settings-content-tabs'>
                    <h2 onClick = {() => changeActiveSection('blacklist')}>Blacklist</h2>
                </div>
            </div>
            <div>
                <div style={{ display: activeSection === 'accountInformation' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Account Information</h1>
                    <SettingsAccountInformation />
                </div>
                <div style={{ display: activeSection === 'changePassword' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Change Password</h1>
                    <SettingsChangePassword />
                </div>
                <div style={{ display: activeSection === 'purchaseHistory' ? 'block' : 'none' }}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Purchase History</h1>
                    <SettingsAccountPurchaseHistory/>
                </div>
                <div style={{display: activeSection === 'whitelist' ? 'block' : 'none'}}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Whitelist</h1>
                    <Whitelist/>
                </div>
                <div style={{display: activeSection === 'blacklist' ? 'block' : 'none'}}>
                    <h1 className='settings-content-tabs' onClick={() => changeActiveSection('base')}>Blacklist</h1>
                    <Blacklist/>
                </div>
            </div>

        </div>

    )
}