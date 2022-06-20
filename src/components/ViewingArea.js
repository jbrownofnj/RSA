import React from 'react'
import styled from "styled-components"


const StyledDiv=styled.div`
  background-image:url('../data/Datacenter.jpg');
  background-color:#0F1A10;
  height:100%;
  width:100%;
  font-family: computerfont;
  font-size: 50px;
  display:block;
  text-align:center;
  margin:0px;
  color:#1CFEBA;
  outline:ridge 10px #829298;
  scroll-behavior:smooth;
  overflow-y:scroll;
  overflow-x:hidden;
`

function ViewingArea(props) {
  
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default ViewingArea