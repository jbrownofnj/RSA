import {Link,Outlet} from "react-router-dom";
import MainHeader from "./components/MainHeader"
import ViewingArea from "./components/ViewingArea"
import MainFooter from "./components/MainFooter"
import styled from "styled-components"



const StyledNavDiv=styled.div`
  font-family: computerfont;
  font-size: 30px;
  display:inline-block;
  height:100%;
  width:24vh;
  background-color:#0F1A10;
  text-align:center;
  margin:0px;
  color:#1CFEBA;
  outline:ridge 10px #829298;
`
const VerticleFlex=styled.div`
height:100vh;
width:98.9vmax;
display:flex;
padding-right:20px;
flex-direction:column;

`
const HorizontalFlex=styled.div`
height:80vh;
width:100%;
padding:0px;
display:flex;
margin:0px;
flex-direction:row;
padding-left:9px;
`

function App({numberEntries}) {
  

  return (
    <VerticleFlex>
    <MainHeader/>
    <HorizontalFlex >
    <StyledNavDiv>
    <br /> <br /> <br />
      <Link to="about">About</Link><br /> <br />
      <Link to="explanation">Explanation</Link><br /> <br />
      <Link to="Lab">Lab</Link><br /> <br />
      <Link to="Links">Links</Link>
    </StyledNavDiv>
    <ViewingArea >
      <Outlet/>
    </ViewingArea>
    </HorizontalFlex>
    <MainFooter numberEntries={numberEntries}/>
    </VerticleFlex>
  );
}

export default App;
