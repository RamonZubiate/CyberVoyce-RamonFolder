import React , {useState} from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
width:100px;
height:50px;
background-color:${(props) => (props.isActive ? "#6f04ff" : "#333")} !important;
color: #fff;
font-size: 16px;
border:none;
border-radius:20px;
`;


export default function ToggleButton({callback}){//receive the callback function as a parameter
    const [isActive,setIsActive] = useState(false);

    const handleChange = () => { //This function negates isActive value and passes the isActive value back to the callback function
        setIsActive(!isActive)
        callback(isActive);
    }

    return (
        <div>
            <StyledButton isActive={isActive} onClick = {handleChange}> {/*change this onClick to "handle change" */}
                {isActive ? 'on' : 'off'}
            </StyledButton>
        </div>
    )
}