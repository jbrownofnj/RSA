import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useState,useEffect} from "react"
import App from './App';
import About from "./routes/About"
import Lab from "./routes/Lab"
import Explanation from "./routes/Explanation"
import Links from "./routes/Links"
import FontStyles from './fonts/FontStyles';
import React from 'react';

function SuperApp() {

  const [message,setMessage]=useState('')
  const [d,setD]=useState("")
  const [encripted,setEncripted]=useState("")
  const [userName,setUserName]=useState("")
  const [numberEntries,setNumberEntries]=useState(2)
  function updateEntries(arrayOfCyphersLength) {
    setNumberEntries(arrayOfCyphersLength)

  }
  function onChangeMessageHandler(e){
    setMessage(e.target.value)
  }
  function onChangeDValueHandler(e){
    setD(e.target.value)
  }
  function onChangeEncriptedHandler(e){
    setEncripted(e.target.value)
  }
  function onChangeNameHandler(e){
  setUserName(e.target.value)
  }


  return (<>
    <FontStyles/>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<App numberEntries={numberEntries} />}>
      <Route path="about" element={<About />} />
      <Route path="explanation" element={<Explanation />} />
      <Route path="lab" element={<Lab updateEntries={updateEntries} userName={userName} onChangeNameHandler={onChangeNameHandler} onChangeEncriptedHandler={onChangeEncriptedHandler} encripted={encripted} onChangeDValueHandler={onChangeDValueHandler} d={d} onChangeMessageHandler={onChangeMessageHandler} message={message}/>} />
      <Route path="links" element={<Links />} />
      <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main>}/>
    </Route>
  </Routes>
    </BrowserRouter>
    </>
  )
}

export default SuperApp