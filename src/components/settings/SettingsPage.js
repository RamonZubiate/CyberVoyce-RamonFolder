import React, { useState } from 'react'
import '../../pages/Settings/Settings.css'


//Imports 
import searchIcon from '../../assets/Search.png'
import SettingsAccount from './SettingsComponents/SettingsAccount'
import SettingsPrivacyAndSaftey from './SettingsComponents/SettingsPrivacyAndSaftey'
import Langauges from './SettingsComponents/Languages'
import Notifications from './SettingsComponents/Notifications'
import Accessibility from './SettingsComponents/Accessibility'
import SettingsSecurity from './SettingsComponents/Security'

//ADD THESE IMPORTS
import { useContext } from 'react'
import { ThemeContext } from '../../App'


export default function SettingsPage() {
    // Zacky Viriot 
    // To get each section in the setting page to render I provided a STATE which will when a section will be clicked on will be replaced with that section in order for only one section to be shown at the time when you click on it.

    // We are going to give it a default state of your account because that will be the first section there so it would only make sense that it is the default  nv 
    const [activeSection, setActiveSection] = useState('yourAccount')

    const changeActiveSection = section => {
        setActiveSection(section)
    }

    const {theme, setTheme} = useContext(ThemeContext); //useContext hook
    
    return (
        <div className='Home' id = {theme}> {/*add this "id = {theme}" */}
            <div className="settings-container">
                <div className = 'settings-title'>
                    <h2>Settings</h2>
                </div>
                <div className="settings-searchBox">
                    <img src={searchIcon} alt="search icon" />
                    <input type="text" placeholder="Search Settings"></input>
                </div>
                <div className='settings-pages'>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('yourAccount')}>
                            Your Account
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('privacyAndSaftey')}>
                            Privacy and safety
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('notifications')}>
                            Notifications
                        </h3>
                    </div>
                    <div className = 'settings-pagesBtn'>
                        <h3 onClick = {() => changeActiveSection('languages')}>
                            Languages
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('accessibility')}>
                            Accessibility
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('security')}>
                            Security
                        </h3>
                    </div>
                    <div className='settings-pagesBtn'>
                        <h3 onClick={() => changeActiveSection('helpCenter')}>
                            Help Center
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <div className='settings-content'>
                    {/* Now this is where things will go in each section */}
                    <div style={{ display: activeSection === 'yourAccount' ? 'block' : 'none' }}>
                        <SettingsAccount/>
                    </div>
                    <div style={{ display: activeSection === 'privacyAndSaftey' ? 'block' : 'none' }}>
                        <SettingsPrivacyAndSaftey/>
                    </div>
                    <div style={{ display: activeSection === 'notifications' ? 'block' : 'none' }}>
                        <Notifications/>
                    </div>
                    <div style = {{display:activeSection === 'languages' ? 'block':'none'}}>
                        <Langauges/>
                    </div>
                    <div style={{ display: activeSection === 'accessibility' ? 'block' : 'none' }}>
                        <Accessibility/>
                    </div>
                    <div style={{ display: activeSection === 'security' ? 'block' : 'none' }}>
                        <SettingsSecurity/>
                    </div>
                    <div style={{ display: activeSection === 'helpCenter' ? 'block' : 'none' }}>
                        this is going to be the help center
                    </div>
                </div>
            </div>

        </div>

    )
}