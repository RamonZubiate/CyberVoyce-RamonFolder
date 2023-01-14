import React from 'react'
import DisableEnableButton from '../../buttons/DisableEnableButton'
import SelectLangButton from '../../buttons/SelectLangButton'



export default function Langauges() {
    return (
        <div>
            <div className='settings-language-content-border'>
                <div className='settings-language-content'>
                    <h2>Langauges</h2>
                    <p style={{ color: 'gray' }}>Select the kind of langauge that you want</p>
                </div>
                <div className = 'settings-preferences-content-container'>
                    <h3>Display Langauges</h3> 
                    <SelectLangButton/>
                </div>
                <div className='settings-language-select-langauge-content'>
                    <p style = {{color:'gray'}}>Select the prefered language</p>
                </div>
                <div className = 'settings-preferences-content-container'>
                    <h3>Auto-translate languages</h3> 
                    <DisableEnableButton/>
                </div>
                <div className='settings-language-select-langauge-content'>
                    <p style = {{color:'gray'}}>Auto-translate content in foreign languages</p>
                </div>
               
                
               
            </div>
        </div>
    )
}

