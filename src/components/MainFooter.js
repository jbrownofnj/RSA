import React from 'react'
import styled from "styled-components"

const StyledFooter=styled.footer`
background-color:#0F1A10;
text-align:center;
display:block;
margin:10px;
font-family:"computerfont";
font-size:3vh;
color:#1CFEBA;
outline:ridge 10px #829298;
width:100%;
height:12vh

`

function MainFooter({numberEntries}) {
  return (
    <StyledFooter>Current Number Of Entries: {numberEntries}</StyledFooter>
  )
}

export default MainFooter