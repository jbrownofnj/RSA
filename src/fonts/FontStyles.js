import { createGlobalStyle } from 'styled-components';
import datalatin from "./datalatin.ttf"
import networld from "./Networld.ttf"



const FontStyles=createGlobalStyle`
    body{margin:0px;
        padding:0px;        
    }
    @font-face {
        font-family: 'computerfont';
        src:url(${datalatin}) format("truetype");
    }
    @font-face{
        font-family:"networkfont";
        src:url(${networld}) format("truetype");
    }
`;
export default FontStyles