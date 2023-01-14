import React, {useState} from 'react'
import styled from 'styled-components'



const StyledButton = styled.button`
    width:200px;
    height:25px;
    background-color:${(props) => (props.isActive ? "#6f04ff" : "#6f04ff")};
    border:none;
    border-radius:20px;
    margin-left:250px;
    margin-top:20px
`;

export default function EmailOrPushNotificationsButton(){
    const [isActive,setIsActive] = useState(false);


    return (
        <div>
            <StyledButton isActive = {isActive} onClick = {() => setIsActive(!isActive)} style={{color:'white'}}>
                {isActive ? 'Email' : 'Push Notifications'}
            </StyledButton>
        </div>
    )
}