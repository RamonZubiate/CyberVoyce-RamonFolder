import React, { useState } from 'react'

//imports 
import SettingsDisplayMedia from './DisplayMedia'

export default function SettingsPrivacyAndSaftey() {
    const [activeSection, setActiveSection] = useState('base')


    const changeActiveSection = section => {
        setActiveSection(section)
    }

    return (
        <div>
            <div>
                <div>
                    <SettingsDisplayMedia/>
                </div>
            </div>

        </div>
    )

}