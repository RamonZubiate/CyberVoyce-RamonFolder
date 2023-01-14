import React , {useState} from 'react'
import styled from 'styled-components'




const StyledButton = styled.button`
    width:200px;
    height:25px;
    background-color:${(props) => (props.isActive ? "#191919" : "#191919")};
    border:none;
    border-radius:20px;
    margin-left:250px;
    margin-top:20px;
    border:1px solid gray;
`;


export default function SelectLangButton(){
    const [isActive,setIsActive] = useState(false)



    return(
        <div>
            <StyledButton isActive = {isActive} onClick = {() => setIsActive(!isActive)} style={{color:'white'}}>
                {isActive ? 'Select Language' : 'English'}
            </StyledButton>
        </div>
    )
}