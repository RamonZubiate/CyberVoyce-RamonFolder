import React from 'react'; 

// renders register page slider
//props expected: createAcc (state that changes slider to true/false for conditional rendering), toggle (function that changes the createAcc state)
const Switch = (props) =>{
    return <label className="RegisterSwitch">
    <input type="checkbox" checked={props.createAcc} onChange={props.toggle}/>
    <span className="RegisterSlider"/>
    <div className='login-register-text'>
        <a>&nbsp;Log in &emsp;&emsp;&ensp;Create Account</a>
    </div>
</label>
};

export default Switch;