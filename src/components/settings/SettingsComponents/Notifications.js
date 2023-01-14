
import React from 'react'
import EmailOrPushNotificationsButton from '../../buttons/EmailOrPushNotificationButton'


export default function Notifications(){
    return(
        <div className = 'settings-notifications-content-border'>
            <div className = 'settings-notifications-content'>
                <h2>Notifications</h2>
                <p style = {{color:'gray'}}>Select the kind of notifications you get about your interest</p>
            </div>
            <div className = 'settings-preferences-content-container'>
                <h3>Preferences</h3>
                <EmailOrPushNotificationsButton/>
            </div>
            <div className='settings-notifications-preferences-content'>
                <p style = {{color:'gray'}}>Choose between email or push notifications</p>
            </div>
        </div>
    )
}