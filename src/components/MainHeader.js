import React from 'react'
import styled from "styled-components"



const StyledDiv=styled.div`
background-color:#0F1A10;
text-align:center;
line-height:9vh;
height:9vmin;
width:100%;
display:block;
margin:10px;
font-family:"networkfont";
font-size:55px;
color:#1CFEBA;
outline:ridge 10px #829298;

`

function MainHeader() {
 
  return (
    <StyledDiv >RSA Encription and its Role in Online Communication </StyledDiv>
  )
}

export default MainHeader