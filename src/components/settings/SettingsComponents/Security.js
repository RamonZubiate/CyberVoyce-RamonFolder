import React, { useState } from 'react'



export default function SettingsSecurity() {
    const [activeSection, setActiveSection] = useState('base')


    const changeActiveSection = section => {
        setActiveSection(section)
    }


    return (
        <div>
            <div className='security-setting-content'>
                <div style={{ display: activeSection === 'base' ? 'block' : 'none' }}>
                    <div>
                        <h2 className='settings-content-tabs'>Security</h2>
                    </div>
                    <div className='your-security-description'>
                        <p style={{ color: 'gray' }}>Select from the security menu below</p>
                    </div>
                    <div className='settings-content-tabs'>
                        <h2 onClick={() => changeActiveSection('two-factor')}>Two-Factor authentication</h2>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ display: activeSection === 'two-factor' ? 'block' : 'none' }}>
                    <h1 onClick={() => changeActiveSection('base')}>
                        Two-Factor Authentication
                    </h1>
                </div>
            </div>
        </div>

    )
}